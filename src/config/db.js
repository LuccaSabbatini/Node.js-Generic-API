// Requisitions
const knex = require("knex");
const config = require("./knexfile");

// OnDuplicateUpdate Function Attachment
const { attachOnDuplicateUpdate } = require("knex-on-duplicate-update");
attachOnDuplicateUpdate();

// Database Object
const db = knex(config.production);

// Module Export
module.exports = db;
