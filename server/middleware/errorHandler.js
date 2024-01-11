const errorHandler = async (error, req, res, next) => {
  console.log(error);
  return res.status(500).json({ msg: error });
};

module.exports = errorHandler;
