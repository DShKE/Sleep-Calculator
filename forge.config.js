module.exports = {
  packagerConfig: {
    name: "SleepCalculator", 
    icon: "./sleep.ico", 
    executableName: "SleepCalculator", 
    win32metadata: {
      ProductName: "Sleep Calculator", 
      InternalName: "SleepCalculator"
    }
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        setupExe: "Sleep Calculator Setup.exe", 
        setupIcon: "./sleep.ico", 
        shortcutName: "Sleep Calculator", 
        createDesktopShortcut: true, 
        createStartMenuShortcut: true 
      }
    }
  ]
};