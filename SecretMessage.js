let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push("to", "Program");
secretMessage[7] = "right";
secretMessage.shift();
secretMessage.unshift("Programming");

secretMessage.splice(6, 5, "know");
console.log(secretMessage);
console.log(secretMessage.join());

// To run file, Simply open the .js file in question in VS Code, switch to the 'Debug Console' tab, hit the debug button in the left nav bar, and click the run icon (play button)!

// Requires nodejs to be installed!
