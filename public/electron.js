const { app, BrowserWindow, Menu, ipcMain, globalShortcut } = require('electron')
const isDev = require('electron-is-dev')
const fetch = require('node-fetch')
const path = require('path')
// const dotenv = require('dotenv')
// const dotenvExpand = require('dotenv-expand')

global.Headers = fetch.Headers

let mainWindow

async function createWindow() {
  mainWindow = new BrowserWindow({
    //alwaysOnTop: true,
    minimizable: true,
    maximizable: true,
    closable: true,
    center: true,
    fullscreen: true,
    kiosk: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      preload: path.join(__dirname, './preload.js')
    }
  })

  globalShortcut.register('f5', () => mainWindow.reload())
  globalShortcut.register('CommandOrControl+R', () => mainWindow.reload())
  if (isDev) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/../node_modules/electron`),
      forceHardReset: true
    })
    mainWindow.loadURL('http://localhost:3000')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'))
    mainWindow.webContents.openDevTools()
  }

  const template = [
    {
      label: 'Application',
      submenu: [
        { label: 'About Application', selector: 'orderFrontStandardAboutPanel:' },
        { label: `Version ${app.getVersion()}`, enabled: false },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click() {
            app.quit()
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
        { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' }
      ]
    }
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))

  mainWindow.on('closed', () => {
    mainWindow = undefined
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
