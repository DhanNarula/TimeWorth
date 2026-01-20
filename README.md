# TimeWorth
TimeWorth is a personal ROI calculator that helps users evaluate whether the time they invest in activities is actually worth it. Instead of measuring success in money alone, the project focuses on return on time by combining effort, skill growth, and perceived value.

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed on your system

### Running the Web UI

1. Start the development server:
```bash
bun run
```

Or alternatively:
```bash
bun run server.js
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

The server will start on port 3000 by default. You can change the port by setting the `PORT` environment variable:
```bash
PORT=8080 bun run
```

## Project Structure

- `index.html` - Web UI for the Time ROI calculator
- `timeROI.js` - JavaScript module with calculation functions
- `server.js` - Bun server for serving the web application
- `TIME_ROI_MODEL.md` - Mathematical model documentation
- `example.js` - Example usage of the calculation functions

## How It Works

The Time ROI score is calculated using the formula:
```
Time ROI Score = ((E × w₁ + S × w₂ + V × w₃) / T) × 100
```

Where:
- **E** = Effort (0-10)
- **S** = Skill Growth (0-10)
- **V** = Perceived Value (0-10)
- **T** = Time Spent (hours)
- **w₁, w₂, w₃** = Component weights (default: 0.2, 0.3, 0.5)

See `TIME_ROI_MODEL.md` for detailed documentation on the mathematical model.
