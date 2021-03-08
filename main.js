const path = require("path");
const {BrowserWindow, app} = require("electron");

app.on("ready", () => {
    let win = new BrowserWindow({
       webPreferences: {
           nodeIntegration: true
       }
    });

    win.setMenu(null);
    win.loadFile(path.join(__dirname, "index.html")).then(() => {
        win.webContents.openDevTools({
            mode: "undocked"
        });
    });

    win.on("closed", () => {
        app.quit();
    });
});
