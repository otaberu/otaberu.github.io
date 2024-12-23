---
sidebar_position: 1
---

# List Connected Robots

After setting up your agent, you can view all robots connected to your network. This helps you monitor which devices are currently available.  

## View robots list
To see robots in network, use the CLI command:  
`rn robots list`  

This will display a table with all connected robots:  
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━┓
┃ PeerId                                               ┃ Name   ┃ Status  ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━┩
│ 12D3KooWFGndT5BRXBSUGcQzT5zgYgyUVR6rbsVYTf4iSVA5Udob │ laptop │ Unknown │
│ 12D3KooWAgJuo1havrarkR4oy1zauEBTv9Bvg21g1V5qihhMnmEw │ robot  │ Unknown │
└──────────────────────────────────���───────────────────┴────────┴─────────┘
```  

The table shows:
- **PeerId**: Unique identifier for each robot in the network
- **Name**: Human-readable name assigned to the robot
- **Status**: Current connection status of the robot  