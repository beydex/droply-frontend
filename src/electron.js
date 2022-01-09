const electron = require("electron")

electron.app.on("ready", async () => {
  let window = new electron.BrowserWindow({
    width: 800,
    height: 600,
  })

  if (process.env.BUILD_MODE === "development") {
    await window.loadURL("http://localhost:3000")
  } else {
    await window.loadFile("public/bundle.html")
  }
})
