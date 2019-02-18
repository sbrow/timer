"use strict";
var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow;
var size = 8;
var w = 16 * size;
var h = 9 * size;
function createWindow() {
    mainWindow = new BrowserWindow({
        minHeight: h,
        minWidth: w,
        height: h,
        width: w,
    });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}
app.on("ready", createWindow);
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
