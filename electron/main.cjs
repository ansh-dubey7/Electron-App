// // electron/main.js
// const { app, BrowserWindow, ipcMain, dialog } = require("electron");
// const fs = require("fs");
// const path = require("path");

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });

//   if (process.env.NODE_ENV === "development") {
//     win.loadURL("http://localhost:5173");
//     win.webContents.openDevTools();
//   } else {
//     win.loadFile(path.join(__dirname, "../dist/index.html"));
//   }
// }

// app.whenReady().then(() => {
//   createWindow();

//   ipcMain.handle("save-file", async (event, content) => {
//     const { canceled, filePath } = await dialog.showSaveDialog({
//       title: "Save Note",
//       defaultPath: "note.txt",
//     });

//     if (!canceled && filePath) {
//       fs.writeFileSync(filePath, content, "utf-8");
//       return { success: true, path: filePath };
//     }

//     return { success: false };
//   });
// });

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });


const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const fs = require("fs");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Detect dev or production
  const isDev = process.argv.includes("--dev");

  if (isDev) {
    win.loadURL("http://localhost:5173"); // Dev server
    win.webContents.openDevTools();
  } else {
    win.loadURL("http://158.220.106.228:5115"); // Production URL
  }
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle("save-file", async (event, content) => {
    const { canceled, filePath } = await dialog.showSaveDialog({
      title: "Save Note",
      defaultPath: "note.txt",
    });

    if (!canceled && filePath) {
      fs.writeFileSync(filePath, content, "utf-8");
      return { success: true, path: filePath };
    }

    return { success: false };
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
