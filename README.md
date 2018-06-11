# Theme Timer

A scheduler for automatically changing VSCode themes, useful for automatically switching Day/Night themes.

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
        "startTime": "16:00:00",
        "endTime": "20:00:00"
    }
]
```

The above will change the active theme to Cobalt2 everyday at 4PM (local time) and will switch to another theme at 8PM (local time).

The time follows a HH:MM:SS format and times should be set back-to-back, as follows:

```
"theme-timer.themes": [
    {
        "theme": "Visual Studio Light",
        "startTime": "7:00:00",
        "endTime": "16:00:00"
    },
    {
        "theme": "Visual Studio Dark",
        "startTime": "16:00:00",
        "endTime": "7:00:00"
    }
]
```

## Release Notes

### 1.0.0

Initial release of Theme Timer extension.