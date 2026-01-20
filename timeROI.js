/**
 * Time ROI Calculator
 * 
 * Calculates the Return on Investment (ROI) for time spent on activities
 * based on effort, skill growth, and perceived value.
 * 
 * @module timeROI
 */

/**
 * Validates input parameters for Time ROI calculation
 * 
 * @param {number} timeSpent - Time spent in hours (must be > 0)
 * @param {number} effort - Effort level (0-10)
 * @param {number} skillGrowth - Skill growth level (0-10)
 * @param {number} perceivedValue - Perceived value level (0-10)
 * @param {Object} weights - Optional weights object {effort, skillGrowth, perceivedValue}
 * @throws {Error} If validation fails
 */
function validateInputs(timeSpent, effort, skillGrowth, perceivedValue, weights = null) {
  // Validate time spent
  if (typeof timeSpent !== 'number' || isNaN(timeSpent)) {
    throw new Error('Time spent must be a valid number');
  }
  if (timeSpent <= 0) {
    throw new Error('Time spent must be greater than 0');
  }

  // Validate effort
  if (typeof effort !== 'number' || isNaN(effort)) {
    throw new Error('Effort must be a valid number');
  }
  if (effort < 0 || effort > 10) {
    throw new Error('Effort must be between 0 and 10');
  }

  // Validate skill growth
  if (typeof skillGrowth !== 'number' || isNaN(skillGrowth)) {
    throw new Error('Skill growth must be a valid number');
  }
  if (skillGrowth < 0 || skillGrowth > 10) {
    throw new Error('Skill growth must be between 0 and 10');
  }

  // Validate perceived value
  if (typeof perceivedValue !== 'number' || isNaN(perceivedValue)) {
    throw new Error('Perceived value must be a valid number');
  }
  if (perceivedValue < 0 || perceivedValue > 10) {
    throw new Error('Perceived value must be between 0 and 10');
  }

  // Validate weights if provided
  if (weights !== null && typeof weights === 'object') {
    const { effort: w1, skillGrowth: w2, perceivedValue: w3 } = weights;
    
    if (typeof w1 !== 'number' || typeof w2 !== 'number' || typeof w3 !== 'number') {
      throw new Error('All weights must be valid numbers');
    }
    
    if (isNaN(w1) || isNaN(w2) || isNaN(w3)) {
      throw new Error('Weights cannot be NaN');
    }
    
    const sum = w1 + w2 + w3;
    if (Math.abs(sum - 1.0) > 0.001) {
      throw new Error(`Weights must sum to 1.0 (current sum: ${sum})`);
    }
    
    if (w1 < 0 || w2 < 0 || w3 < 0) {
      throw new Error('Weights cannot be negative');
    }
  }
}

/**
 * Calculates the Time ROI score
 * 
 * Formula: ((E × w₁ + S × w₂ + V × w₃) / T) × 100
 * 
 * @param {number} timeSpent - Time spent in hours (must be > 0)
 * @param {number} effort - Effort level (0-10)
 * @param {number} skillGrowth - Skill growth level (0-10)
 * @param {number} perceivedValue - Perceived value level (0-10)
 * @param {Object} [weights] - Optional weights object
 * @param {number} [weights.effort=0.2] - Weight for effort component
 * @param {number} [weights.skillGrowth=0.3] - Weight for skill growth component
 * @param {number} [weights.perceivedValue=0.5] - Weight for perceived value component
 * @returns {number} Time ROI score (typically 0-100+, higher is better)
 * @throws {Error} If validation fails
 * 
 * @example
 * // Basic usage with default weights
 * const score = calculateTimeROI(10, 7, 8, 9);
 * // Returns: 83.0
 * 
 * @example
 * // Custom weights
 * const score = calculateTimeROI(10, 7, 8, 9, {
 *   effort: 0.3,
 *   skillGrowth: 0.4,
 *   perceivedValue: 0.3
 * });
 */
function calculateTimeROI(timeSpent, effort, skillGrowth, perceivedValue, weights = null) {
  // Default weights
  const defaultWeights = {
    effort: 0.2,
    skillGrowth: 0.3,
    perceivedValue: 0.5
  };

  // Use provided weights or defaults
  const finalWeights = weights || defaultWeights;

  // Validate inputs
  validateInputs(timeSpent, effort, skillGrowth, perceivedValue, finalWeights);

  // Extract weights
  const w1 = finalWeights.effort;
  const w2 = finalWeights.skillGrowth;
  const w3 = finalWeights.perceivedValue;

  // Calculate weighted composite score
  const compositeScore = (effort * w1) + (skillGrowth * w2) + (perceivedValue * w3);

  // Calculate Time ROI: (composite score / time spent) × 100
  const timeROI = (compositeScore / timeSpent) * 100;

  // Round to 2 decimal places for readability
  return Math.round(timeROI * 100) / 100;
}

/**
 * Calculates Time ROI with equal weights for all components (simplified model)
 * 
 * Formula: ((E + S + V) / 3) / T × 100
 * 
 * @param {number} timeSpent - Time spent in hours (must be > 0)
 * @param {number} effort - Effort level (0-10)
 * @param {number} skillGrowth - Skill growth level (0-10)
 * @param {number} perceivedValue - Perceived value level (0-10)
 * @returns {number} Time ROI score
 * @throws {Error} If validation fails
 * 
 * @example
 * const score = calculateTimeROISimple(10, 7, 8, 9);
 * // Returns: 80.0
 */
function calculateTimeROISimple(timeSpent, effort, skillGrowth, perceivedValue) {
  // Validate inputs (no weights needed)
  validateInputs(timeSpent, effort, skillGrowth, perceivedValue, null);

  // Calculate average of components
  const averageScore = (effort + skillGrowth + perceivedValue) / 3;

  // Calculate Time ROI
  const timeROI = (averageScore / timeSpent) * 100;

  return Math.round(timeROI * 100) / 100;
}

/**
 * Interprets a Time ROI score into a human-readable category
 * 
 * @param {number} score - Time ROI score
 * @returns {Object} Interpretation object with category and description
 * 
 * @example
 * const interpretation = interpretTimeROI(83);
 * // Returns: { category: 'Excellent', description: 'Highly efficient use of time' }
 */
function interpretTimeROI(score) {
  if (score < 0) {
    return {
      category: 'Invalid',
      description: 'Score cannot be negative'
    };
  } else if (score <= 30) {
    return {
      category: 'Low',
      description: 'Consider if activity is worth continuing'
    };
  } else if (score <= 60) {
    return {
      category: 'Moderate',
      description: 'Decent returns, room for improvement'
    };
  } else if (score <= 80) {
    return {
      category: 'Good',
      description: 'Strong returns relative to time invested'
    };
  } else if (score <= 100) {
    return {
      category: 'Excellent',
      description: 'Highly efficient use of time'
    };
  } else {
    return {
      category: 'Exceptional',
      description: 'Extremely high value per hour'
    };
  }
}

// Export functions (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateTimeROI,
    calculateTimeROISimple,
    interpretTimeROI,
    validateInputs
  };
}

// Export for ES6 modules
if (typeof window === 'undefined' && typeof global !== 'undefined') {
  // Node.js environment
  if (typeof exports !== 'undefined') {
    exports.calculateTimeROI = calculateTimeROI;
    exports.calculateTimeROISimple = calculateTimeROISimple;
    exports.interpretTimeROI = interpretTimeROI;
    exports.validateInputs = validateInputs;
  }
}
