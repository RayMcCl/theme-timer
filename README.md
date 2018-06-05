# Theme Timer

A Cron-style scheduler for automatically changing VSCode themes, useful for automatically switching Day/Night themes.

## Extension Settings

The extension contributes the following settings:
* `theme-timer.enable`: Enables/Disables the extension (default is true)
* `theme-timer.themes`: An array of themes with \"theme\" and \"time\" keys

### Themes

Themes can be scheduled by adding them to the `theme-timer.themes` configuration. 

```
"theme-timer.themes": [
    {
        "theme": "Cobalt2",
        "time": "* * 4 * * *"
    }
]
```

The above will change the active theme to Cobalt2 everyday at 4PM (local time).

The time follows a Cron structure for timing and is broken down as below:

```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```

Please see the below package for more details:

https://github.com/node-schedule/node-schedule


## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of Theme Timer extension.