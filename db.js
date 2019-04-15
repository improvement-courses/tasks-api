var knex = require('knex');

var db = knex({
    client: 'mysql',
    connection: {
        host: 'us-cdbr-iron-east-03.cleardb.net',
        user: 'ba7b79e5496391',
        password: '28f6e5f9',
        database: 'heroku_d19371e47dd0818'
    }
});

module.exports = db;