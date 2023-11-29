// db.js
const sqlite3 = require('sqlite3').verbose();


const initializeDatabase = () => {
    const db = new sqlite3.Database('./RTRUDE-CLOCK.sqlite3');

    db.serialize(() => {
        db.run(`
        CREATE TABLE IF NOT EXISTS Pays(
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           code CHAR(3) UNIQUE,
           nom VARCHAR(50)
        );

        CREATE TABLE IF NOT EXISTS Cards(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          titre VARCHAR(50),
          chemin VARCHAR(50),
          description TEXT
        );

        CREATE TABLE IF NOT EXISTS Genre(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          libelle VARCHAR(50) UNIQUE
       );
       
       CREATE TABLE IF NOT EXISTS Users(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nom VARCHAR(50),
          prenom VARCHAR(50),
          email VARCHAR(50),
          telephone CHAR(10),
          paysID INT NOT NULL,
          genreID INT NOT NULL,
          CONSTRAINT fk_Users_Pays FOREIGN KEY(paysID) REFERENCES Pays(id),
          CONSTRAINT fk_Users_Genre FOREIGN KEY(genreID) REFERENCES Genre(id)
       );
       `)
    });
    return db;
};

const stopDatabase = (db) => {
  db.close((err) => {
    if (err) {
      console.error(err.message)
    }
    console.log("La base de donnée n'est plus connectée")
  })
}

const insertIntoSchema = () => {
  const db = new sqlite3.Database('./RTRUDE-CLOCK.sqlite3');
  const stmt = db.prepare(`INSERT OR IGNORE INTO ? (?) VALUES (?)`);
  return stmt
}

const insertValuesInPays = (values) => {
  console.log(values)
  table = {
    'nom' : "Pays",
    'colonnes' : "code, nom",
    'values' : `${values["code"]}, ${values["nom"]}`
  }
  stmt.run(table["nom"], table["colonnes"], table["values"]);
}

const insertValuesInGenre = (values) => {
  table = {
    'nom' : "Genre",
    'colonnes' : "libelle",
    'values' : `${values.libelle}`
  }
  stmt.run(table.nom, table.colonnes, table.values);
}

const insertValuesInUsers = (values) => {
  table = {
    'nom' : "Users",
    'colonnes' : "nom, prenom, email, telephone, paysID, genreID",
    'values' : `${values.nom}, ${values.prenom}, ${values.email}, ${values.telephone}, ${values.paysID}, ${values.genreID}`
  }
  stmt.run(table.nom, table.colonnes, table.values);
}

module.exports = initializeDatabase;
// module.exports = stopDatabase;
stmt = insertIntoSchema()
insertValuesInPays({"code" : "USA", "nom" : "Etats-Unis"})