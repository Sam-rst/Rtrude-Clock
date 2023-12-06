const User = require('./database/Entity/User');
const bodyParser = require('body-parser');


const setupRoutes = (app) => {
  app.use(bodyParser.json());

  app.post('/login', async (req, res) => {
    console.log('Reçu une requête POST : login');
    const username = req.body.username;
    const password = req.body.password;
    try {
      User.getUserByUsername(username, (user) => {
        if (!user) {
          console.log("User not found", username)
          return res.json({ passwordMatch: false });
        } else {
          console.log('User found : ', user.username);
          User.verifyPassword(password, user, (passwordMatch) => {
            if (!passwordMatch) {
              console.log('Incorrect password');
              return res.json({ passwordMatch: false });
            } else {
              console.log('Password correct !');
              return res.json({ passwordMatch: true });
            }
          });

        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ passwordMatch: false, error: error.message });
    }
  });

  app.post('/register', async (req, res) => {
    console.log('Reçu une requête POST : register');
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
      User.insertUser(username, email, password, (insertResult) => {
        if (!insertResult) {
          console.log("Insert query not worked")
          return res.json({ registerSucess: false });
        } else {
          console.log('User ', username, ' added!');
          return res.json({ registerSucess: true });
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ registerSucess: false, error: error.message });
    }
  });
  
};



module.exports = setupRoutes;