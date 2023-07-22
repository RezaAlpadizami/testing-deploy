const GuestModel = require("../models/guest");

const getAllMessage = async (req, res) => {
  try {
    const [data] = await GuestModel.getAllMessages();

    res.status(200).json({
      message: "GET All messages guest success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createPostGuest = async (req, res) => {
  const { body } = req;
  try {
    await GuestModel.createPostMessages(body);
    res.status(201).json({
      message: "CREATE post message success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllMessage,
  createPostGuest,
};
