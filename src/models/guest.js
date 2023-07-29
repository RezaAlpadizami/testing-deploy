const db = require("../config/database");

const getAllMessages = () => {
  const SQLQuery = "SELECT * FROM guest ORDER BY createdAt DESC";

  return db.execute(SQLQuery);
};

const createPostMessages = async (body) => {
  try {
    if (!body.selected_option || body.name.trim() === "") {
      throw new Error("Maaf boleh diisi nama dan kehadirannya :D.");
    }

    const SQLQuery = "INSERT INTO guest (name, message, selected_option) VALUES (?, ?, ?)";
    const values = [body.name, body.message, body.selected_option];

    await db.execute(SQLQuery, values);

    const fetchQuery = "SELECT * FROM guest ORDER BY createdAt DESC";
    const [rows] = await db.execute(fetchQuery);

    return rows;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

module.exports = {
  getAllMessages,
  createPostMessages
};

