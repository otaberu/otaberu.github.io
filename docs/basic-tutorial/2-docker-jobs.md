---
sidebar_position: 2
---

# Managing Docker Jobs

Robot Agent allows you to run Docker containers on your connected robots. This is useful for deploying applications, running tests, or executing maintenance tasks.  

## Starting a Docker Job
You can launch a Docker container using the CLI. The `rn jobs add` command requires two parameters:
- Path to a JSON file containing the job description
- Robot name or peer_id where the job should run  

### Basic Usage
```bash
rn jobs add <PATH_TO_JSON> <ROBOT>
```

### Example
Let's run a simple Alpine Linux container:  

1. Use this example configuration (from https://github.com/Smehnov/rn/blob/main/job_terminal.json)  
2. Run the command:  
   `rn jobs add job_terminal.json turtlebot-0`  

After sending the command, you'll receive a job ID:  
```
Preparing job:  521652a7-5715-496f-961d-1a0f1efbf1cc
Requests sent
```  

This ID can be used to track and manage your job.   