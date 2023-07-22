const getNameGuest = (req, res) => {
    const { name } = req.query;
    res.status(200).json({
      message: "GET guestname success",
      data: {
        guest_name: name,
      },
    });
  };

  module.exports ={
    getNameGuest
  }