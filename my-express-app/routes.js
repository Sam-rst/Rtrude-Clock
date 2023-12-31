const User = require('./database/Entity/User');
const Card = require('./database/Entity/Card');
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
          console.log("Insert user not worked")
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

  app.post('/addCard', async (req, res) => {
    console.log('Reçu une requête POST : addCard');
    const imageUrl = req.body.imageUrl;
    const name = req.body.name;
    const prix = req.body.prix;
    try {
      Card.insertCard(imageUrl, name, prix, (insertResult) => {
        if (!insertResult) {
          console.log("Insert card not worked")
          return res.json({ addCardSucess: false });
        } else {
          console.log('Card ', name, ' added!');
          return res.json({ addCardSucess: true });
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ addCardSucess: false, error: error.message });
    }
  });

  app.get('/cards', (req, res) => {
    console.log('Reçu une requête GET : cards');
    Card.getAllCards((rows) => {
      if (!rows) {
        console.log("Query for select all cards not worked")
        res.status(500).send(err.message);
      } else {
        console.log("All the cards")
        res.json(rows)
      }
    })
  })

};



module.exports = setupRoutes;