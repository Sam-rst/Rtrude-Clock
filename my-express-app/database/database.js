const User = require('./Entity/User');
const db = require('./initialize').initializeDatabase();

// User.insertUser('Samort', 'powlair@gmail.com', 'mdp');

// User.getAllUsers((users) => {
//     console.log('Liste des utilisateurs : ', users);
// });

User.getUserByUsername('Samort', (res) => {
    if (!res) {

    } else {
        User.verifyPassword(res, 'mdp', (res) => {
            console.log(res)
        })
    }
});

