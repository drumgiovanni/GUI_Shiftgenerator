// Electron側の初期設定
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

// アプリを閉じた時にquit
app.on('window-all-closed', function() {
  app.quit();
});

// アプリ起動後の処理
app.on('ready', function() {
  var subpy = require('child_process').spawn('python',['./app.py']);
  var rq = require('request-promise');
  var mainAddr = 'http://localhost:8888';

  var openWindow = function() {
    mainWindow = new BrowserWindow({width: 800, height: 1200, webPreferences:{nodeIntegration:false}});
    mainWindow.openDevTools();
    mainWindow.loadURL(mainAddr);

    // 終了処理
    mainWindow.on('closed', function() {
      mainWindow = null;
      subpy.kill('SIGINT');
    });
  };

  var startUp = function() {
    rq(mainAddr)
      .then(function(htmlString) {
        console.log('server started');
        openWindow();
      })
      .catch(function(err) {
        startUp();
      });
  };

  startUp();

});
