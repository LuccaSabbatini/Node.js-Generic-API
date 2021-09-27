// Requisitions
const ApplicationError = require("../errors/ApplicationError");
const general = require("../models/GeneralModel");
const { nowDate, filterReqBody } = require("../../shared/Util");

// Methods Export
module.exports = {
  getAllDataFromTable(req, res, next) {
    const { table } = req.params;

    general.getAllDataFromTable(
      table,
      (data) => {
        if (!data.length) {
          return next(new ApplicationError("Registros não encontrados.", 404));
        }

        return res.status(200).json(data);
      },
      next
    );
  },

  getRowFromTableByID(req, res, next) {
    const { table, id } = req.params;

    general.getRowFromTableByID(
      table,
      id,
      (data) => {
        if (!data.length) {
          return next(new ApplicationError("Registro não encontrado.", 404));
        }

        return res.status(200).json(data);
      },
      next
    );
  },

  getRowFromTableByFieldValue(req, res, next) {
    const { table, field, value } = req.params;

    general.getRowFromTableByFieldValue(
      table,
      field,
      value,
      (data) => {
        if (!data.length) {
          return next(new ApplicationError("Registro não encontrado.", 404));
        }

        return res.status(200).json(data);
      },
      next
    );
  },

  createRowInTable(req, res, next) {
    const { table } = req.params;
    const newRow = filterReqBody(req, table);

    newRow.data_inclusao = nowDate();
    newRow.data_exclusao = null;

    general.createRowInTable(
      newRow,
      table,
      (data) => {
        if (!data.length) {
          return next(new ApplicationError("Falha ao criar registro.", 400));
        }

        return res.status(201).json(data);
      },
      next
    );
  },

  updateRowInTableByID(req, res, next) {
    const { id, table } = req.params;
    const updatedRow = filterReqBody(req, table);

    general.updateRowInTableByID(
      updatedRow,
      id,
      table,
      (data) => {
        if (!data.length) {
          return next(new ApplicationError("Registro não encontrado.", 404));
        }

        return res.status(200).json(data);
      },
      next
    );
  },

  deleteRowFromTableByID(req, res, next) {
    const { table, id } = req.params;

    general.deleteRowFromTableByID(
      table,
      id,
      (success) => {
        if (!success) {
          return next(new ApplicationError("Registro não encontrado.", 404));
        }

        return res
          .status(200)
          .json({ success, message: "Registro excluído com sucesso." });
      },
      next
    );
  },
};
