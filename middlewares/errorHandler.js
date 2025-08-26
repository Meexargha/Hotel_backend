//  Global Error Handler
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Something went wrong! Please try again." });
};

module.exports = errorHandler;
