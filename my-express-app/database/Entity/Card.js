const bcrypt = require('bcrypt');
const db = require('../initialize').initializeDatabase();

// Créer la table 'user' si elle n'existe pas
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS card (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      imageUrl VARCHAR(255) NOT NULL,
      name VARCHAR(20) NOT NULL,
      prix NUMERIC(10, 2) NOT NULL
    )
  `);
});

function dropTable(callback){
    db.run('DROP TABLE card', (err) => {
        if (err) {
            console.log("Table not dropped")
            callback(null)
            return;
        }
        console.log("Table card dropped")
    })
}

// Fonction pour insérer une card dans la table
function insertCard(imageUrl, name, prix, callback) {
    const query = 'INSERT INTO card (imageUrl, name, prix) VALUES (?, ?, ?)';
    db.run(query, [imageUrl, name, prix], function (err) {
        if (err) {
            console.log(err.message);
            callback(false);
            return;
        }

        console.log(`Card insérée avec l'ID ${this.lastID}`);
        callback(true);
    });
};


// Fonction pour récupérer tous les utilisateurs de la table
function getAllCards(callback) {
    const query = 'SELECT * FROM card';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            callback(err)
        } else {
            callback(rows);
        }
    });
}

function removeById(cardID, callback) {
    const query = 'DELETE FROM card WHERE id = ?';
    db.run(query, [cardID], (err) => {
        if (err) {
            console.log("Card not removed : ", err.message)
            callback(err)
        } else {
            console.log("Card ", cardID, " removed from the DB")
        }
    })
}
// Exports des fonctions
module.exports = {
    insertCard,
    getAllCards,
    removeById,
    dropTable
}
