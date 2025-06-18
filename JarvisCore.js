// 🔹 JARVIS Core Logic (Demo Version)

// Greeting system
function greetUser(name) {
  return `Hello ${name}, I am JARVIS. How can I help you today?`;
}

// Command engine (sample)
function processCommand(command) {
  const lower = command.toLowerCase();

  if (lower.includes("weather")) {
    return "The weather today is partly cloudy with a chance of creativity.";
  } else if (lower.includes("launch")) {
    return "Launching NOVA cinematic sequence...";
  } else {
    return "I'm sorry, I didn't understand that. Would you like to try again?";
  }
}
