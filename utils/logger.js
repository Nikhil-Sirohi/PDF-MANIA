// Simple logger to log application events
const log = (message) => {
  console.log(`[${new Date().toISOString()}] ${message}`);
};

module.exports = log; // Export log function
