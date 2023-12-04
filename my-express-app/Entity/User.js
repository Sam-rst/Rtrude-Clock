const bcrypt = require('bcrypt');
const db = require('../database/database').initializeDatabase()

// Créer la table 'user' si elle n'existe pas
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `);
});

// Fonction pour insérer un utilisateur dans la table
function insertUser(username, email, password) {
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log('Mot de passe hashé : ' + hash)

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
            return;
        }
        callback(rows);
    });
}

// Fonction pour vérifier le mot de passe lors de la connexion
function verifyPassword(username, password, callback) {
    const query = 'SELECT id, password FROM user WHERE username = ?';
    db.get(query, [username], (err, row) => {
        if (err) {
            console.error(err.message);

        } else if (!row) {
            // L'utilisateur n'existe pas
            callback(null, false);
        } else {
            // L'utilisateur existe, on compare les mots de passes hashé
            bcrypt.compare(password, row.password, function (err, result) {
                if (err) {
                    console.error(err.message);
                }
                callback(row.id, result);
            });
        }
    });
}

// Exports des fonctions
module.exports = {
    insertUser,
    getAllUsers,
    verifyPassword
};
