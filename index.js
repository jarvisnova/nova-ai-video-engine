function startJarvis() {
  alert("JARVIS Mode is now Active. Let's begin!");
  console.log("NOVA JARVIS running...");

  // Optional: use core functions if JarvisCore.js is loaded
  if (typeof greetUser === "function" && typeof processCommand === "function") {
    console.log(greetUser("Krishna"));
    console.log(processCommand("launch cinematic"));
  }
}
