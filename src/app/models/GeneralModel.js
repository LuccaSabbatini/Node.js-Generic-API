// Requisitions
const db = require("../../config/db");
const { nowDate } = require("../../shared/Util");

// Methods Export
module.exports = {
  async getAllDataFromTable(table, callback, next) {
    try {
      const data = await db(table).select().where("deletionDate", null);

      callback(data);
    } catch (err) {
      return next(err);
    }
  },

  async getRowFromTableByID(table, id, callback, next) {
    try {
      const data = await db(table)
        .select()
        .where({ id: id, deletionDate: null });

      callback(data);
    } catch (err) {
      return next(err);
    }
  },

  async getRowFromTableByFieldValue(table, field, value, callback, next) {
    try {
      const data = await db(table)
        .select()
        .where(field, "like", `%${value}%`)
        .where("deletionDate", null);

      callback(data);
    } catch (err) {
      return next(err);
    }
  },

  async createRowInTable(reqBody, table, callback, next) {
    try {
      const data = await db(table)
        .insert(reqBody)
        .then((res) => {
          return db(table).select().where({ id: res[0], deletionDate: null });
        });

      callback(data);
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async updateRowInTableByID(reqBody, id, table, callback, next) {
    try {
      const data = await db(table)
        .update(reqBody)
        .where({ id: id, deletionDate: null })
        .then(() => {
          return db(table).select().where({ id: id, deletionDate: null });
        });

      callback(data);
    } catch (err) {
      return next(err);
    }
  },

  async deleteRowFromTableByID(table, id, callback, next) {
    try {
      const data = await db(table)
        .update({ deletionDate: nowDate() })
        .where({ id: id, deletionDate: null });

      callback(data === 1 ? true : false);
    } catch (err) {
      return next(err);
    }
  },
};
