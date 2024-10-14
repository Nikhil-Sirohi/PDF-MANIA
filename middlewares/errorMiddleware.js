export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Set status code
  res.status(statusCode).json({
    // Send error response
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack in production
  });
};
