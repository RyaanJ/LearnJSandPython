// forecast today is 293 kelvin, set constant kelvin = 293
const kelvin = 0;
// celsius is 273 less than kelvin
let celsius = kelvin - 273;
// fahrenheit formula
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// To run file, Simply open the .js file in question in VS Code, switch to the 'Debug Console' tab, hit the debug button in the left nav bar, and click the run icon (play button)!

// Requires nodejs to be installed!
