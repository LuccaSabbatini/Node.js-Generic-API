///// DEPENDENCIES /////
const express = require("express");
const routes = express.Router();

///// CONTROLLERS /////
const GeneralController = require("./app/controllers/GeneralController");

///// ROUTES /////
// General Database Manipulation
routes.get("/get/:table", GeneralController.getAllDataFromTable);
routes.get("/get/:table/:id", GeneralController.getRowFromTableByID);
routes.get(
  "/get/:table/:field/:value",
  GeneralController.getRowFromTableByFieldValue
);
routes.post(
  "/create/:table",
  AuthenticationMiddleware.authenticateUser,
  GeneralController.createRowInTable
);
routes.put(
  "/update/:table/:id",
  AuthenticationMiddleware.authenticateUser,
  GeneralController.updateRowInTableByID
);
routes.delete(
  "/delete/:table/:id",
  AuthenticationMiddleware.authenticateUser,
  GeneralController.deleteRowFromTableByID
);

///// EXPORT /////
module.exports = routes;
