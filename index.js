function startJarvis() {
  alert("JARVIS Mode is now Active. Let's begin!");
  console.log("NOVA JARVIS running...");

  // 1. Change the content of the screen
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>🎬 JARVIS is Online</h1>
    <p>Welcome back, Founder. Ready to launch your first cinematic video?</p>
    <button onclick="launchDemo()">Generate Sample Scene</button>
  `;
}

// 2. Demo button action
function launchDemo() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h2>🎞️ Scene: A lonely astronaut stares at Earth from orbit...</h2>
    <p>Emotion: Melancholy. Voice: Whispered. Music: Ambient Echoes.</p>
    <p>🧠 JARVIS is building the scene...</p>
  `;

  console.log("Cinematic scene build logic triggered.");
}
