var gulp = require('gulp');
var packager = require('electron-packager');
var config = require('./package.json');

// Windows向けアプリの設定
gulp.task('packager-win', function(done) {
  packager({
    dir: './',                 // アプリ本体のフォルダ 
    out: './release',          // 出力先のフォルダ
    name: config.name,         // アプリ名
    arch: 'x64',               // 64bit
    platform: 'win32',         // Windows向け
    electronVersion: '2.0.9',  // Electronのバージョン
    overwrite: true,           // すでにフォルダがある場合は上書き
    asar: true,
    appVersion: config.version,// アプリバージョン
    appCopyright: '',     　　　// 著作権
  });
});

// Mac向けアプリの設定
gulp.task('packager-mac', function(done) {
  packager({
    dir: './',                 // アプリ本体のフォルダ 
    out: './release',          // 出力先のフォルダ
    name: config.name,         // アプリ名
    arch: 'x64',               // 64bit
    platform: 'darwin',        // Mac向け
    electronVersion: '2.0.9',  // Electronのバージョン
    overwrite: true,           // すでにフォルダがある場合は上書き
    asar: true,
    appVersion: config.version,// アプリバージョン
    appCopyright: '',     　　　// 著作権
  });
});