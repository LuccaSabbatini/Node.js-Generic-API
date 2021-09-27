// Requires
require("dotenv").config({ path: ".env" });

// Module Export
module.exports = {
  production: {
    client: "mysql", // CASO SEJA NECESSÁRIO MUDAR O BANCO, SERA PRECISO MUDAR A QUERY DO METODO "placeOrder" DO ARQUIVO "/src/app/models/OrdersModel.js", POIS O MÉTODO "onDuplicateUpdate" NÃO É NATIVO DO KNEX E FUNCIONA APENAS NO MYSQL.
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
};
