const sqlite3 = require('sqlite3').verbose();
const path = require('path');

function initializeDatabase() {
    const dbPath = path.resolve(__dirname, 'RTRUDE-CLOCK.sqlite3');
    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.CREATE);
    return db
};

module.exports = {
    initializeDatabase
};