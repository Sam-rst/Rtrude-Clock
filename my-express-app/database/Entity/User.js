const bcrypt = require('bcrypt');
const db = require('../initialize').initializeDatabase();

// Créer la table 'user' si elle n'existe pas
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      username VARCHAR(50) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `);
});

function hashPassword(password) {
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            console.error(err.message);
            return;
        }
        return hash
    })
}

// Fonction pour insérer un utilisateur dans la table
function insertUser(username, email, password) {
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            console.error(err.message);
            return;
        }
        // console.log('Mot de passe hashé : ' + hash)

        const query = 'INSERT INTO user (username, email, password) VALUES (?, ?, ?)';
        db.run(query, [username, email, hash], function (err) {
            if (err) {
                console.error(err.message);
                return;
            }
            console.log(`Utilisateur inséré avec l'ID ${this.lastID}`);
        });
    })
}

// Fonction pour récupérer tous les utilisateurs de la table
function getAllUsers(callback) {
    const query = 'SELECT * FROM user';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
        } else {
            callback(rows);
        }
    });
}

function getUserByUsername(username, callback) {
    const query = 'SELECT * FROM user WHERE username = ?';
    db.get(query, [username], (err, row) => {
        if (err) {
            console.error(err.message);

        } else if (!row) {
            // console.log('User not found.')
            callback(null, false);

        } else {
            // console.log('User found : ', row);
            callback(row);
        }
    })
}

function getUserById(id, callback) {
    const query = 'SELECT * FROM user WHERE id = ?';
    db.get(query, [id], (err, row) => {
        if (err) {
            console.error(err.message);

        } else if (!row) {
            // console.log('User not found.')
            callback(false);

        } else {
            // console.log('User found : ', row);
            callback(row);
        }
    })
}

// Fonction pour vérifier le mot de passe lors de la connexion
function verifyPassword(password, user, callback) {
    /* 1ERE VERSION : password n'est pas hashé et user.password est hashé */
    bcrypt.compare(password, user.password, function (err, isMatch) {
            if (err) {
                    console.error(err.message);
                    callback(err);
                }
            
                // Appeler le callback avec le résultat de la comparaison
                callback(isMatch);
            });
    /* 2EME VERSION : password et user.password sont hashés */
    // callback(password == user.password);
}

// Exports des fonctions
module.exports = {
    insertUser,
    getAllUsers,
    verifyPassword,
    getUserByUsername,
    getUserById
};
