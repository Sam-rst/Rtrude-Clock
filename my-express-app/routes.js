const User = require('./database/Entity/User');

const setupRoutes = (app) => {
    app.post('/login', async (req, res) => {
      try {
        console.log(req)
        const user = await User.getUserByUsername(req.username);
        if (!user) {
          console.log('User not found');
          return res.json({ passwordMatch: false });
        }
  
        console.log('User found : ', user.username);
        const passwordMatch = await User.verifyPassword(req.password, user);
  
        // Mauvais mot de passe
        if (!passwordMatch) {
          console.log('Incorrect password');
          return res.json({ passwordMatch: false });
        }
        
        // Mot de passe bon
        console.log('Password correct !');
        return res.json({ passwordMatch: true });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ passwordMatch: false, error: error.message });
      }
    });
  };
  


module.exports = setupRoutes;