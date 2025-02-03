function countingValleys(steps, path) {
  var level = 0; // Current altitude
  var valleys = 0; // Number of valleys traversed
  for (var i = 0; i < steps; i++) {
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
var steps = 8;
var path = "UDDDUDUU";
console.log(countingValleys(steps, path)); // Output: 1
