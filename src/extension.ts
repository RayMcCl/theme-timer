'use strict';
import * as vscode from 'vscode';
import * as moment from 'moment';

let CONFIG = vscode.workspace.getConfiguration();
const THEME = "workbench.colorTheme";
let themeList;
let state;
let tasks = [];

export function activate(context: vscode.ExtensionContext) {
    updateSettings();
}

function updateSettings () {
    const config = vscode.workspace.getConfiguration('theme-timer');
    themeList = config.themes;
    state = config.enable;
    
    if(state){
        checkTime();
    }
}

function updateTheme (theme) {
    console.log('Updating theme', theme.theme);
    CONFIG.update(THEME, theme.theme, true);
    CONFIG = vscode.workspace.getConfiguration();
}

function checkTime (){
    var format = 'hh:mm:ss';
    var curTime = moment();

    for(var i = 0; i < themeList.length; i++){
        var startTime = moment(themeList[i].startTime, format);
        var endTime = moment(themeList[i].endTime, format);

        if(startTime.isAfter(endTime)){
            endTime.add(1, 'day');
        }

        console.log(startTime, endTime, curTime);

        if(curTime.isBetween(startTime, endTime)){
            updateTheme(themeList[i]);
            scheduleNextCheck(endTime);
            return;
        }
    }

    setTimeout(checkTime, 300000);
}

function scheduleNextCheck (time) {
    var curTime = moment();
    time.add(1, 's');

    console.log('Checking theme in', time.diff(curTime));

    setTimeout(checkTime, time.diff(curTime));
}

vscode.workspace.onDidChangeConfiguration(updateSettings, this);