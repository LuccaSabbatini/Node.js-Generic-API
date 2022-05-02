// Requisitions
const knex = require("knex");
const config = require("./knexfile");

// Database Object
const db = knex(config.production);

// Module Export
module.exports = db;
