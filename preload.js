//mid layer to only allow the frontend to access specific functions
const { contextBridge } = require("electron")

/* exposeinmainworld is the method. it is being called on the contextbridge object. it makes specific functions avalible to the frontend
the namespace is the container that holds the exposed functions. call the functions from the namespace object in the frontend with dot notation.
electron automatically the namespaces avalible through the window object
ex: window.namespace.dostuff()
syntax: contextBridge.exposeInMainWorld("<namespace>"), {
method: parameters => {
function implamentation
}} */
contextBridge.exposeInMainWorld("sleepCalculator", {
  /* method calculatelifetimesleep is declared with calculateLifetimeSleep:
  (birthdatestr) is the parameters of the method.
  calculatelifetimesleep not declared as a function because it is just a peoperty of the object. 
  (yes, methods are properties. they just perform an action when called)
  properties in an object are defined with property: value */
  calculateLifetimeSleep: (birthdateStr) => {
    const birthdate = new Date(birthdateStr)
    const today = new Date()
    console.log(today);

    // Calculate total days lived
    const ageInMs = today - birthdate
    const daysLived = ageInMs / (1000 * 60 * 60 * 24)
    const hoursLived = ageInMs / (1000 * 60 * 60)
    
    // Calculate total sleep hours (assuming 8 hours per night)
    const totalSleepHours = daysLived * 8

    //note that this is return of method calculatelifetimesleep
      return {
        //math.floor rounds to int
        totalHours: Math.floor(totalSleepHours),
        days: Math.floor(totalSleepHours / 24),
        years: Math.floor(totalSleepHours / 8766),
        future: ageInMs < 0,
        //This is a conditional operator that follows this structure: condition ? valueIfTrue : valueIfFalse
        timeUntil: ageInMs < 0 ? Math.abs(daysLived.toFixed(0)) : daysLived
      }
    }
})