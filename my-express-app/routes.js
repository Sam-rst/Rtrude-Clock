const express = require('express');


const setupRoutes = (app, db) => {
    app.get('/pays', (req, res) => {
        db.all('SELECT * FROM Pays', [], (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(rows);
            }
        });
    });
};

module.exports = setupRoutes;