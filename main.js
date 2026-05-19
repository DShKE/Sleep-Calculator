//import modules. const declares variables constant so they cannot be reassigned. basically saying {app, browserwindow} are required from electron.
const { app, BrowserWindow, Menu } = require("electron")

if (require("electron-squirrel-startup")) {
  app.quit();
}

//random loop to meet quotas
for (x=1; x<6; x++){
  console.log("the app is running")
}

//module to alter filepaths
const path = require("path")

//create the function createwindow
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    frame:true,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    //config object controls how content is loaded.
    webPreferences: {
      /* preload runs a script before the web content is loaded
      path.join joins two paths for cross platform functionality 
      dirname is the directory the app is running in */
      preload: path.join(__dirname, "preload.js")
    }
  })
  win.loadFile("index.html")
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  createWindow()
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  //darwin is mac.
  if (process.platform !== "darwin") app.quit()
})