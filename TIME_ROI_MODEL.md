# Time ROI Score - Mathematical Model

## Overview
The Time ROI score evaluates the return on investment of time spent on activities by combining effort, skill growth, and perceived value into a single numerical score.

## Core Components

### Input Variables

1. **Time Spent (T)**: Hours invested in the activity
   - Range: T > 0 (measured in hours)
   - Example: 10 hours

2. **Effort (E)**: Subjective measure of effort expended
   - Range: 0 to 10 (0 = minimal, 10 = maximum)
   - Example: 7/10

3. **Skill Growth (S)**: Perceived improvement in skills/knowledge
   - Range: 0 to 10 (0 = no growth, 10 = significant growth)
   - Example: 8/10

4. **Perceived Value (V)**: Subjective value/benefit gained
   - Range: 0 to 10 (0 = no value, 10 = extremely valuable)
   - Example: 9/10

## Mathematical Model

### Formula

```
Time ROI Score = ((E × w₁ + S × w₂ + V × w₃) / T) × 100
```

Where:
- **E** = Effort (0-10)
- **S** = Skill Growth (0-10)
- **V** = Perceived Value (0-10)
- **T** = Time Spent (hours)
- **w₁, w₂, w₃** = Weights for each component (default: w₁ = 0.2, w₂ = 0.3, w₃ = 0.5)

### Default Weights

- **Effort (w₁ = 0.2)**: Lower weight - effort alone doesn't guarantee value
- **Skill Growth (w₂ = 0.3)**: Moderate weight - skill improvement is valuable
- **Perceived Value (w₃ = 0.5)**: Highest weight - user's perceived benefit is most important

Weights must sum to 1.0: w₁ + w₂ + w₃ = 1.0

## Reasoning

### 1. **Composite Return Score**
   - Combines three positive returns (E, S, V) into a weighted composite
   - Weighted average ensures all factors contribute proportionally
   - Perceived value gets highest weight as it reflects overall satisfaction

### 2. **Time as Denominator**
   - Time spent (T) is in the denominator, creating an efficiency metric
   - Higher scores mean more return per hour invested
   - Follows ROI principle: Returns / Investment

### 3. **Scaled Output (× 100)**
   - Multiplying by 100 provides a more intuitive scale
   - Typical range: 0 to ~100 (can exceed 100 for extremely high-value, low-time activities)
   - Makes scores easier to interpret and compare

### 4. **Component Rationale**

   **Effort (E)**:
   - Represents the intensity of engagement
   - Higher effort often correlates with deeper learning
   - Lower weight because effort without results isn't valuable

   **Skill Growth (S)**:
   - Measures tangible improvement in capabilities
   - Direct benefit that compounds over time
   - Moderate weight as it's valuable but not always the primary goal

   **Perceived Value (V)**:
   - Captures overall satisfaction and utility
   - Accounts for intangible benefits (enjoyment, relationships, etc.)
   - Highest weight as it reflects holistic assessment

## Example Calculation

Given:
- Time Spent (T) = 10 hours
- Effort (E) = 7
- Skill Growth (S) = 8
- Perceived Value (V) = 9

Using default weights (w₁ = 0.2, w₂ = 0.3, w₃ = 0.5):

```
Composite Score = (7 × 0.2 + 8 × 0.3 + 9 × 0.5)
                = (1.4 + 2.4 + 4.5)
                = 8.3

Time ROI Score = (8.3 / 10) × 100
               = 0.83 × 100
               = 83.0
```

**Interpretation**: A score of 83 indicates a strong return on time investment - good value, skill growth, and reasonable effort relative to time spent.

## Score Interpretation

| Score Range | Interpretation |
|-------------|----------------|
| 0-30 | Low ROI - Consider if activity is worth continuing |
| 31-60 | Moderate ROI - Decent returns, room for improvement |
| 61-80 | Good ROI - Strong returns relative to time invested |
| 81-100 | Excellent ROI - Highly efficient use of time |
| 100+ | Exceptional ROI - Extremely high value per hour |

## Alternative Formula (Simplified)

For a simpler model without weights:

```
Time ROI Score = ((E + S + V) / 3) / T × 100
```

This treats all components equally and can be useful when specific weighting preferences are unknown.

## Customization

Users can adjust weights based on personal priorities:
- **Career-focused**: Increase w₂ (Skill Growth) weight
- **Enjoyment-focused**: Increase w₃ (Perceived Value) weight
- **Process-focused**: Increase w₁ (Effort) weight
