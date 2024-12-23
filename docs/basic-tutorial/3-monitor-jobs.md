---
sidebar_position: 3
---

# Monitoring Docker Jobs

After launching Docker jobs on your robots, you can monitor their status and progress using the Robot Agent CLI.  

## View Jobs List
To see all jobs running on a specific robot, use:  
`rn jobs list <ROBOT>`  

For example:  
`rn jobs list turtlebot-0`  

This will display a table showing all jobs:  
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Job Id                               ┃ Job Type                ┃ Status     ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 521652a7-5715-496f-961d-1a0f1efbf1cc │ docker-container-launch │ processing │
└──────────────────────────────────────┴─────────────────────────┴────────────┘
```  

The table shows:
- **Job Id**: Unique identifier for the job
- **Job Type**: Type of job being executed
- **Status**: Current state of the job  