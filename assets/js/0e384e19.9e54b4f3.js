"use strict";(self.webpackChunkrn_website=self.webpackChunkrn_website||[]).push([[976],{2053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"intro","title":"Quick Start","description":"About Robot Agent","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Tutorial - Usage of Robot Agent","permalink":"/docs/category/tutorial---usage-of-robot-agent"}}');var s=t(4848),r=t(8453);const i={sidebar_position:1},a="Quick Start",c={},l=[{value:"About Robot Agent",id:"about-robot-agent",level:2},{value:"Download agent",id:"download-agent",level:2},{value:"Install rn-cli",id:"install-rn-cli",level:2},{value:"Create owner key",id:"create-owner-key",level:2},{value:"Create configuration for robots network",id:"create-configuration-for-robots-network",level:2},{value:"Start Agent on robot",id:"start-agent-on-robot",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"See robots list",id:"see-robots-list",level:2},{value:"Start docker job",id:"start-docker-job",level:2},{value:"See jobs list",id:"see-jobs-list",level:2},{value:"Connect to job&#39;s terminal",id:"connect-to-jobs-terminal",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,s.jsx)(n.h2,{id:"about-robot-agent",children:"About Robot Agent"}),"\n",(0,s.jsxs)(n.p,{children:["Robot-agent is an open-source dev tool to setup scalable peer-to-peer network for edge devices and manage data and CI/CD pipelines over it. It is based on ",(0,s.jsx)(n.a,{href:"https://libp2p.io",children:"libp2p protocol"}),", offering pub-sub message passing, built-in encryption, and NAT traversal, among other useful features."]}),"\n",(0,s.jsx)(n.p,{children:"You can use it on-prem without internet access to update the code/configs and get the data from your fleet, using CLI tool with terminalUI. Or in a distributed network across many deployment locations and in the cloud, with the same level of security and no additional setup. It can scale to millions of nodes and its underlying protocol is used daily in some of the largest distributed systems including Ethereum, IPFS, Polkadot, and Filecoin."}),"\n",(0,s.jsx)(n.p,{children:"This tool is ideal for roboticists and developers looking to create distributed, scalable systems where agents can collaborate and have adaptable mesh networks with minimal manual configuration. It is also a great way to enable secure, cross-fleet communication between devices owned by different organizations."}),"\n",(0,s.jsx)(n.h2,{id:"download-agent",children:"Download agent"}),"\n",(0,s.jsxs)(n.p,{children:["Download agent from ",(0,s.jsx)(n.a,{href:"https://github.com/otaberu/robot-agent/releases/latest",children:"https://github.com/otaberu/robot-agent/releases/latest"})," for your platform architecture"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"For example:"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"wget https://github.com/otaberu/robot-agent/releases/download/0.1.1/robot-agent-aarch64-apple-darwin"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rename it",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"mv robot-agent-aarch64-apple-darwin robot-agent"})]}),"\n",(0,s.jsxs)(n.p,{children:["And make executable:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"chmod +x robot-agent"})]}),"\n",(0,s.jsx)(n.h2,{id:"install-rn-cli",children:"Install rn-cli"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pipx install rn-cli"})}),"\n",(0,s.jsx)(n.h2,{id:"create-owner-key",children:"Create owner key"}),"\n",(0,s.jsx)(n.p,{children:"We create a keypair for an organization owner. Public key will be place to all agents while startup. Secret key is used to sign messages for the Robot Network."}),"\n",(0,s.jsxs)(n.p,{children:["To create key, use cli command:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"rn keys gen owner.key"})]}),"\n",(0,s.jsxs)(n.p,{children:["After running this command, key will be created by set path and you will see public key in ",(0,s.jsx)(n.code,{children:"base64"})," format:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Public Key: Qwu4TtfNOcQzMJkGiYvJ4IuZSuszM0w1ViEEuAHlzo0="})]}),"\n",(0,s.jsxs)(n.p,{children:["To continue, let's set ",(0,s.jsx)(n.code,{children:"USER_KEY_PATH"})," environment variable that contains path to owner key",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"export USER_KEY_PATH=owner.key"})]}),"\n",(0,s.jsx)(n.h2,{id:"create-configuration-for-robots-network",children:"Create configuration for robots network"}),"\n",(0,s.jsxs)(n.p,{children:["To publish config, you should firstly run agent on your machine and set path to socket(same folder as an agent by default).",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"export AGENT_SOCKET_PATH=rn.socket"})]}),"\n",(0,s.jsxs)(n.p,{children:["We use cli's TUI to configure a list of robots:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"rn tui config robots.yaml"})]}),"\n",(0,s.jsxs)(n.p,{children:["After launch, you will see an interface with robots:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{src:"https://i.ibb.co/PQfm3zy/Pasted-image-20240812210939.png",alt:""})]}),"\n",(0,s.jsxs)(n.p,{children:['Then we click "Add robot" to generate key and set info:',(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{src:"https://i.ibb.co/Ykv83KF/Pasted-image-20240812211358.png",alt:""})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Save Private Key, it will be used to start agent on a device. If you have problem to select a text, try holding shift or option key"})}),"\n",(0,s.jsxs)(n.p,{children:["To publish config, you should firstly run agent(add new robot without publishing yet) on your machine and set path to socket(same folder as an agent by default).",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"export AGENT_SOCKET_PATH=rn.socket"})]}),"\n",(0,s.jsxs)(n.p,{children:["After adding all robots, press key ",(0,s.jsx)(n.code,{children:"p"})," or click on 'publish config' in footer"]}),"\n",(0,s.jsx)(n.h2,{id:"start-agent-on-robot",children:"Start Agent on robot"}),"\n",(0,s.jsx)(n.p,{children:"To start agent use:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"./robot-agent --owner <OWNER_PUBLIC_KEY> --secret-key <ROBOT_SECRET_KEY>"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Argument"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--socket-filename (-s)"}),(0,s.jsx)(n.td,{children:"path to create unix socket"}),(0,s.jsx)(n.td,{children:"rn.socket"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--key-filename (-k)"}),(0,s.jsx)(n.td,{children:"path to save secret key"}),(0,s.jsx)(n.td,{children:"rn.key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--port-libp2p (-l)"}),(0,s.jsx)(n.td,{children:"port to use as libp2p node"}),(0,s.jsx)(n.td,{children:"8765"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--bootstrap-addr (-b)"}),(0,s.jsx)(n.td,{children:"multiaddress of bootstrap node"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--secret-key (-s)"}),(0,s.jsx)(n.td,{children:"secret key in base64 to use on startup"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--owner (-0)"}),(0,s.jsx)(n.td,{children:"base64 public key of the owner"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"Now that you have your Robot Agent running, you can:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/basic-tutorial/list-robots",children:"View connected robots"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/basic-tutorial/docker-jobs",children:"Launch Docker jobs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/basic-tutorial/monitor-jobs",children:"Monitor running jobs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/basic-tutorial/terminal-access",children:"Access container terminals"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"see-robots-list",children:"See robots list"}),"\n",(0,s.jsxs)(n.p,{children:["To see robots in network we use cli command",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"rn robots list"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 PeerId                                               \u2503 Name   \u2503 Status  \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 12D3KooWFGndT5BRXBSUGcQzT5zgYgyUVR6rbsVYTf4iSVA5Udob \u2502 laptop \u2502 Unknown \u2502\n\u2502 12D3KooWAgJuo1havrarkR4oy1zauEBTv9Bvg21g1V5qihhMnmEw \u2502 robot  \u2502 Unknown \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.h2,{id:"start-docker-job",children:"Start docker job"}),"\n",(0,s.jsxs)(n.p,{children:["We can use CLI to launch docker job. ",(0,s.jsx)(n.code,{children:"rn jobs add"})," command accepts path to json with job description and robot name(or peer_id) as arguments."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"rn jobs add <PATH_TO_JSON> <ROBOT>"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's start example ",(0,s.jsx)(n.code,{children:"alpine:3"})," container (",(0,s.jsx)(n.a,{href:"https://github.com/Smehnov/rn/blob/main/job_terminal.json",children:"https://github.com/Smehnov/rn/blob/main/job_terminal.json"}),"):"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"rn jobs add job_terminal.json turtlebot-0"})}),"\n",(0,s.jsxs)(n.p,{children:["After sending command you will see a message with ",(0,s.jsx)(n.code,{children:"job_id"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Preparing job:  521652a7-5715-496f-961d-1a0f1efbf1cc\nRequests sent\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-jobs-list",children:"See jobs list"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"rn jobs list <ROBOT>"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Job Id                               \u2503 Job Type                \u2503 Status     \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 521652a7-5715-496f-961d-1a0f1efbf1cc \u2502 docker-container-launch \u2502 processing \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-jobs-terminal",children:"Connect to job's terminal"}),"\n",(0,s.jsxs)(n.p,{children:["We can access job terminal if job was launched with ",(0,s.jsx)(n.code,{children:'"custom_command": "sh"'})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"rn jobs terminal <ROBOT> <JOB_ID>"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"rn jobs terminal turtlebot-0 521652a7-5715-496f-961d-1a0f1efbf1cc"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"receiver started\n===TERMINAL SESSION STARTED===\n\n/ #\n/ # ls\n/ # bin    etc    lib    mnt    proc   run    srv    tmp    var\ndev    home   media  opt    root   sbin   sys    usr\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"Ctrl+D"})," to exit"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);