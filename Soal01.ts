function countingValleys(steps: number, path: string): number {
  let level = 0; // Current altitude
  let valleys = 0; // Number of valleys traversed

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      level++; // Step up
      if (level === 0) {
        valleys++; // Just exited a valley
      }
    } else if (path[i] === "D") {
      level--; // Step down
    }
  }

  return valleys;
}

// Example usage
const steps = 8;
const path = "UDDDUDUU";
console.log(countingValleys(steps, path)); // Output: 1
