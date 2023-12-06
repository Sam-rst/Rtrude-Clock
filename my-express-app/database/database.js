const User = require('./Entity/User');
const Card = require('./Entity/Card');
const db = require('./initialize').initializeDatabase();

// User.insertUser('Samort', 'powlair@gmail.com', 'mdp');

// User.getAllUsers((users) => {
//     console.log('Liste des utilisateurs : ', users);
// });

// User.getAllUsers((res) => {
//     console.log(res)
// })

// Card.insertCard('product-2.png', 'Ergonomic Chair', 149.99, (err, res) => {
//     if (err){
//         console.log("Donnée non rentrée : ", err.message)
//         return;
//     }
//     console.log("Donnée rentrée")
// })


// Card.removeById(6, (res) => {
//     console.log(res)
// })

// Card.dropTable((res) => {
//     console.log(res)
// })

Card.getAllCards((res) => {
    console.log(res)
})