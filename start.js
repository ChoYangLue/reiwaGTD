'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {

  // ブラウザ(Chromium)の起動, 初期画面のロード
  //mainWindow = new BrowserWindow({titleBarStyle: 'hidden', width: 720, height: 1280});
    mainWindow = new BrowserWindow({titleBarStyle: 'hidden', width: 600, height: 800});
  //mainWindow = new BrowserWindow({frame: false, width: 1280, height: 720});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});