/**
 * Example usage of Time ROI Calculator
 * 
 * Run with: node example.js
 */

const { calculateTimeROI, calculateTimeROISimple, interpretTimeROI } = require('./timeROI.js');

console.log('=== Time ROI Calculator Examples ===\n');

// Example 1: Basic calculation with default weights
console.log('Example 1: Learning a new programming language');
console.log('- Time Spent: 10 hours');
console.log('- Effort: 7/10');
console.log('- Skill Growth: 8/10');
console.log('- Perceived Value: 9/10');
console.log('- Weights: Default (effort: 0.2, skillGrowth: 0.3, value: 0.5)\n');

const score1 = calculateTimeROI(10, 7, 8, 9);
const interpretation1 = interpretTimeROI(score1);
console.log(`Time ROI Score: ${score1}`);
console.log(`Category: ${interpretation1.category}`);
console.log(`Description: ${interpretation1.description}\n`);

// Example 2: Custom weights (career-focused)
console.log('Example 2: Career training (custom weights)');
console.log('- Time Spent: 20 hours');
console.log('- Effort: 8/10');
console.log('- Skill Growth: 9/10');
console.log('- Perceived Value: 7/10');
console.log('- Weights: Career-focused (effort: 0.2, skillGrowth: 0.5, value: 0.3)\n');

const score2 = calculateTimeROI(20, 8, 9, 7, {
  effort: 0.2,
  skillGrowth: 0.5,
  perceivedValue: 0.3
});
const interpretation2 = interpretTimeROI(score2);
console.log(`Time ROI Score: ${score2}`);
console.log(`Category: ${interpretation2.category}`);
console.log(`Description: ${interpretation2.description}\n`);

// Example 3: Simplified calculation (equal weights)
console.log('Example 3: Simplified calculation (equal weights)');
console.log('- Time Spent: 5 hours');
console.log('- Effort: 6/10');
console.log('- Skill Growth: 7/10');
console.log('- Perceived Value: 8/10\n');

const score3 = calculateTimeROISimple(5, 6, 7, 8);
const interpretation3 = interpretTimeROI(score3);
console.log(`Time ROI Score: ${score3}`);
console.log(`Category: ${interpretation3.category}`);
console.log(`Description: ${interpretation3.description}\n`);

// Example 4: Low ROI activity
console.log('Example 4: Low ROI activity');
console.log('- Time Spent: 15 hours');
console.log('- Effort: 3/10');
console.log('- Skill Growth: 2/10');
console.log('- Perceived Value: 4/10\n');

const score4 = calculateTimeROI(15, 3, 2, 4);
const interpretation4 = interpretTimeROI(score4);
console.log(`Time ROI Score: ${score4}`);
console.log(`Category: ${interpretation4.category}`);
console.log(`Description: ${interpretation4.description}\n`);

// Example 5: Exceptional ROI
console.log('Example 5: Exceptional ROI activity');
console.log('- Time Spent: 2 hours');
console.log('- Effort: 9/10');
console.log('- Skill Growth: 10/10');
console.log('- Perceived Value: 10/10\n');

const score5 = calculateTimeROI(2, 9, 10, 10);
const interpretation5 = interpretTimeROI(score5);
console.log(`Time ROI Score: ${score5}`);
console.log(`Category: ${interpretation5.category}`);
console.log(`Description: ${interpretation5.description}\n`);

// Error handling examples
console.log('=== Error Handling Examples ===\n');

try {
  calculateTimeROI(0, 5, 5, 5); // Invalid: time must be > 0
} catch (error) {
  console.log(`Error caught: ${error.message}`);
}

try {
  calculateTimeROI(10, 15, 5, 5); // Invalid: effort > 10
} catch (error) {
  console.log(`Error caught: ${error.message}`);
}

try {
  calculateTimeROI(10, 5, 5, 5, {
    effort: 0.3,
    skillGrowth: 0.3,
    perceivedValue: 0.3  // Invalid: weights don't sum to 1.0
  });
} catch (error) {
  console.log(`Error caught: ${error.message}`);
}
