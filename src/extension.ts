'use strict';
import * as vscode from 'vscode';
import * as schedule from 'node-schedule';

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

    console.log('Config', config);
    
    if(state){
        scheduleTasks();
    } else {
        cancelTasks();
    }
}

function updateTheme () {
    CONFIG.update(THEME, this.theme, true);
    CONFIG = vscode.workspace.getConfiguration();

    console.log('Update theme', this.theme);
}

function scheduleTasks () {
    cancelTasks();

    for(var i = 0; i < themeList.length; i++){
        tasks.push(schedule.scheduleJob(themeList[i].time, updateTheme.bind(themeList[i])));
    }
}

function cancelTasks () {
    for(var i = 0; i < tasks.length; i++){
        tasks[i].cancel();
    }   

    tasks = [];
}

vscode.workspace.onDidChangeConfiguration(updateSettings, this);