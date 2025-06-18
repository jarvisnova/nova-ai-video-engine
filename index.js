function startJarvis() {
  alert("JARVIS Mode is now Active. Let's begin!");
  console.log("NOVA JARVIS running...");

  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>🎬 JARVIS is Online</h1>
    <p>Welcome back, Founder. Ready to launch your first cinematic video?</p>
    <button onclick="launchDemo()">🎞️ Generate Sample Scene</button>
  `;
}

function launchDemo() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div style="background: url('https://images.unsplash.com/photo-1589927986089-35812388d1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80') center/cover no-repeat; padding: 60px; border-radius: 12px;">
      <h2 style="color: #ffffff; background-color: rgba(0,0,0,0.5); padding: 10px; border-radius: 6px;">
        🌌 Scene: A lonely astronaut stares at Earth from orbit...
      </h2>
      <p style="color: #dddddd; background-color: rgba(0,0,0,0.5); padding: 10px;">
        Emotion: <strong>Melancholy</strong><br>
        Voice: <em>Whispered narration</em><br>
        Music: <em>Ambient Echoes</em>
      </p>
      <p style="color: #00ffd5; font-weight: bold;">🧠 JARVIS is rendering the cinematic experience...</p>
    </div>
  `;

  console.log("🎬 Scene visuals loaded. Emotion engine active.");
}
