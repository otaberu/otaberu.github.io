---
sidebar_position: 4
---

# Accessing Container Terminal

Robot Agent allows you to connect directly to a running container's terminal, providing interactive access for debugging and maintenance.  

## Connecting to a Container Terminal
For containers launched with `"custom_command": "sh"`, you can access their terminal using:  
`rn jobs terminal <ROBOT> <JOB_ID>`  

### Example
To connect to a specific container:  
`rn jobs terminal turtlebot-0 521652a7-5715-496f-961d-1a0f1efbf1cc`  

You'll see output similar to:  
```
receiver started
===TERMINAL SESSION STARTED===

/ #
/ # ls
/ # bin    etc    lib    mnt    proc   run    srv    tmp    var
dev    home   media  opt    root   sbin   sys    usr
```  

### Exiting the Terminal
To exit the terminal session, use `Ctrl+D`.  

## Notes
- Terminal access is only available for containers launched with shell access
- The terminal provides full interactive capabilities, allowing you to run commands as if you were directly on the container
- Be cautious when using terminal access in production environments  