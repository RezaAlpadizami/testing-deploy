const db = require("../config/database");

const getAllMessages = () => {
  const SQLQuery = "SELECT * FROM guest ORDER BY createdAt DESC";

  return db.execute(SQLQuery);
};

const createPostMessages = async (body) => {
  const SQLQuery = `INSERT INTO guest (name, message, selected_option) VALUES ("${body.name}", "${body.message}", "${body.selected_option}")`;

  await db.execute(SQLQuery);

  const fetchQuery = "SELECT * FROM guest ORDER BY createdAt DESC";
  const [rows] = await db.execute(fetchQuery);

  return rows;
};

module.exports = {
  getAllMessages,
  createPostMessages
};

