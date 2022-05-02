// Requires
require("dotenv").config({ path: ".env" });

// Module Export
module.exports = {
  production: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
};
