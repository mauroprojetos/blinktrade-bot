const fs = require('fs')
const path = require('path')

const mkdir = function(path) {
  return new Promise((resolve, reject) => {
    if(!fs.existsSync(path)) {
      fs.mkdir(path, (err) => {
        if(err) ErrorLog(`${err.message} - HORARIO: ${new Date()}`)
        resolve(true)
      })
    }
    resolve(true)
  })
}

const init = async function(){
  try {
    await mkdir(path.join(path.resolve(), process.env.ERRORFOLDER))
    await mkdir(path.join(path.resolve(), process.env.LOGSFOLDER))
  } catch (err) {
    ErrorLog(process.env.ERRORFOLDER, err)
  }
}


const ErrorLog = async function(message) {
  try {
    let hours = new Date()
    let date = `${hours.getHours()}H${hours.getMinutes()}m`
    await writeFile(path.join(process.env.ERRORFOLDER, date), `${message} - HORARIO: ${new Date()}`)
  } catch(err){
    console.error(err)
  }
}

const writeFile = function(folder, msg) {
  return new Promise((resolve, reject) => {
    fs.appendFile(path.join(path.resolve(), folder), `${msg},\n`, err => {
      if(err) reject(err)
      resolve()
    })
  })
}

const createJSON = async function(message){
  try {
    let date = new Date()
    let file = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    await writeFile(path.join(process.env.LOGSFOLDER, `${file}.txt`), message)
  } catch (error) {
    ErrorLog(error)
  }
}


module.exports = Object.assign({}, { init, createJSON, ErrorLog })