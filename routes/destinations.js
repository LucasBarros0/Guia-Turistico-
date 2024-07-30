const db = require('../config/db');

class Destination {
    static async getAll() {
        const [rows] = await db.execute('SELECT * FROM destinations');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.execute('SELECT * FROM destinations WHERE id = ?', [id]);
        return rows[0];
    }
}

module.exports = Destination;
