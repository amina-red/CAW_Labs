// notation.js

function mean(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
      console.error("Invalid input. Please provide a non-empty array of scores.");
      return NaN;
    }
  
    const sum = scores.reduce((acc, score) => acc + score, 0);
    const average = sum / scores.length;
  
    return average;
  }
  
  module.exports = mean;
  