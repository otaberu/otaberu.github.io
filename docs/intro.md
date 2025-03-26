---
sidebar_position: 1
---
# Quick Start
## About Robot Agent
Robot-agent is an open-source dev tool to setup scalable peer-to-peer network for edge devices and manage data and CI/CD pipelines over it. It is based on [libp2p protocol](https://libp2p.io), offering pub-sub message passing, built-in encryption, and NAT traversal, among other useful features.  

You can use it on-prem without internet access to update the code/configs and get the data from your fleet, using CLI tool with terminalUI. Or in a distributed network across many deployment locations and in the cloud, with the same level of security and no additional setup. It can scale to millions of nodes and its underlying protocol is used daily in some of the largest distributed systems including Ethereum, IPFS, Polkadot, and Filecoin.  

This tool is ideal for roboticists and developers looking to create distributed, scalable systems where agents can collaborate and have adaptable mesh networks with minimal manual configuration. It is also a great way to enable secure, cross-fleet communication between devices owned by different organizations.  

## Download agent
Download agent from https://github.com/otaberu/robot-agent/releases/latest for your platform architecture  

*For example:*  
`wget https://github.com/otaberu/robot-agent/releases/download/0.1.1/robot-agent-aarch64-apple-darwin`  

Rename it  
`mv robot-agent-aarch64-apple-darwin robot-agent`  

And make executable:  
`chmod +x robot-agent`  

## Install rn-cli
`pipx install rn-cli`  

## Create owner key
We create a keypair for an organization owner. Public key will be place to all agents while startup. Secret key is used to sign messages for the Robot Network.  

To create key, use cli command:  
`rn keys gen owner.key`  

After running this command, key will be created by set path and you will see public key in `base64` format:  
`Public Key: Qwu4TtfNOcQzMJkGiYvJ4IuZSuszM0w1ViEEuAHlzo0=`  

To continue, let's set `USER_KEY_PATH` environment variable that contains path to owner key  
`export USER_KEY_PATH=owner.key`  

## Create configuration for robots network
To publish config, you should firstly run agent on your machine and set path to it's RPC node (you could use another port).  
`export AGENT_RPC=ws://localhost:8888`  

We use cli's TUI to configure a list of robots:  
`rn tui config robots.yaml`  

After launch, you will see an interface with robots:  
![](https://i.ibb.co/PQfm3zy/Pasted-image-20240812210939.png)  

Then we click "Add robot" to generate key and set info:  
![](https://i.ibb.co/Ykv83KF/Pasted-image-20240812211358.png)  

**Save Private Key, it will be used to start agent on a device. If you have problem to select a text, try holding shift or option key**  

To publish config, you should firstly run agent(add new robot without publishing yet) on your machine.
Run agent locally in another terminal window:
`./robot-agent --owner <OWNER_PUBLIC_KEY> --secret-key <ROBOT_SECRET_KEY> --rpc 127.0.0.1:8888`  ` 

After adding all robots, press key `p` or click on 'publish config' in footer  

## Start Agent on robot
To start agent use:  

`./robot-agent --owner <OWNER_PUBLIC_KEY> --secret-key <ROBOT_SECRET_KEY>`  

| Argument               | Description                            | Default   |
| ---------------------- | -------------------------------------- | --------- |
| --rpc                  | address where to start rpc node        | rn.socket |
| --key-filename (-k)    | path to save secret key                | rn.key    |
| --port-libp2p (-l)     | port to use as libp2p node             | 8765      |
| --bootstrap-addr (-b)  | multiaddress of bootstrap node         |           |
| --secret-key (-s)      | secret key in base64 to use on startup |           |
| --owner (-0)           | base64 public key of the owner         |           |

RPC node used as a way to communicate between any representative of agent's network and rn-cli. You don't need to run it on your every agent.

Bootstarp node could serve as a fast way to connect your agent's for the first time. For example, if you run second agent and your first agent is located at 212.168.0.9 and runned with libp2p port 8765, you can pass `-b /ip4/212.168.0.9/tcp/8765`
## Next Steps
Now that you have your Robot Agent running, you can:

1. [View connected robots](basic-tutorial/1-list-robots.md)
2. [Launch Docker jobs](basic-tutorial/2-docker-jobs.md)
3. [Monitor running jobs](basic-tutorial/3-monitor-jobs.md)
4. [Access container terminals](basic-tutorial/4-terminal-access.md)  

## See robots list
To see robots in network we use cli command  
`rn robots list`  

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━┓
┃ PeerId                                               ┃ Name   ┃ Status  ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━┩
│ 12D3KooWFGndT5BRXBSUGcQzT5zgYgyUVR6rbsVYTf4iSVA5Udob │ laptop │ Unknown │
│ 12D3KooWAgJuo1havrarkR4oy1zauEBTv9Bvg21g1V5qihhMnmEw │ robot  │ Unknown │
└──────────────────────────────────────────────────────┴────────┴─────────┘
```  

## Start docker job
We can use CLI to launch docker job. `rn jobs add` command accepts path to json with job description and robot name(or peer_id) as arguments.  

`rn jobs add <PATH_TO_JSON> <ROBOT>`  

Let's start example `alpine:3` container (https://github.com/Smehnov/rn/blob/main/job_terminal.json):  

`rn jobs add job_terminal.json turtlebot-0`  

After sending command you will see a message with `job_id`  
```
Preparing job:  521652a7-5715-496f-961d-1a0f1efbf1cc
Requests sent
```  

## See jobs list
`rn jobs list <ROBOT>`  

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Job Id                               ┃ Job Type                ┃ Status     ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 521652a7-5715-496f-961d-1a0f1efbf1cc │ docker-container-launch │ processing │
└──────────────────────────────────────┴─────────────────────────┴────────────┘
```  

## Connect to job's terminal
We can access job terminal if job was launched with `"custom_command": "sh"`  

`rn jobs terminal <ROBOT> <JOB_ID>`  
`rn jobs terminal turtlebot-0 521652a7-5715-496f-961d-1a0f1efbf1cc`  

```
receiver started
===TERMINAL SESSION STARTED===

/ #
/ # ls
/ # bin    etc    lib    mnt    proc   run    srv    tmp    var
dev    home   media  opt    root   sbin   sys    usr
```  

Use `Ctrl+D` to exit  
