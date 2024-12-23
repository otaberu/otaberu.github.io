"use strict";(self.webpackChunkrn_website=self.webpackChunkrn_website||[]).push([[59],{8995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var o=t(9267),s=t(4848),a=t(8453);const r={slug:"updates-2024-11-18",title:"Development Diary November 2024",authors:["alex","arseniy"],tags:["development","agent"]},i=void 0,l={authorsImageUrls:[void 0,void 0]},c=[{value:"Default Jobs for CLI",id:"default-jobs-for-cli",level:3},{value:"Robot Configs Now in YAML",id:"robot-configs-now-in-yaml",level:3},{value:"Agent Stores Job History",id:"agent-stores-job-history",level:3},{value:"Encryption",id:"encryption",level:3},{value:"Wireguard Setup",id:"wireguard-setup",level:3},{value:"Data Storage",id:"data-storage",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Welcome to another update on our development journey! We've been hard at work and have some exciting new features and improvements to share with you. Let's dive in!"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"default-jobs-for-cli",children:"Default Jobs for CLI"}),"\n",(0,s.jsx)(n.p,{children:"We're thrilled to introduce two default jobs that are ready to run at any time:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Docker's hello-world",":linux"," - This job is perfect for checking if everything is set up correctly. Running it will give you that warm, fuzzy feeling of success."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rn jobs add hello.job <ROBOT_NAME>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Access to SH Terminal in alpine:3 - This job provides terminal access inside an Alpine Docker container. It's like having a tiny, powerful shell right at your fingertips."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rn jobs add terminal.job <ROBOT_NAME>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For the curious minds out there, you can find the sources for these examples ",(0,s.jsx)(n.a,{href:"https://github.com/Smehnov/rn/blob/main/mb/job_examples.py",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"robot-configs-now-in-yaml",children:"Robot Configs Now in YAML"}),"\n",(0,s.jsxs)(n.p,{children:["In our quest for better readability and usability, we\u2019ve switched to ",(0,s.jsx)(n.code,{children:".yaml"})," files for storing configuration data. This change makes your configs not only more readable but also aligns with common DevOps practices. Here's a sneak peek:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"robots:\n- name: Spot\n  robot_id: ''\n  robot_peer_id: 12D3KooWFgRQ9bF2Xnu8UmVURssJLgL9gAdMdYbbs4g7fKGxkTf3\n  robot_public_key: Vx0g5l4VGapu89LIo0dB7q6q1HLSj+5cj/Mgl0OE7U4=\n  tags: []\nusers:\n- public_key: ''\n  tags: []\n  username: new_user\nversion: 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Compare this to the old, unformatted ",(0,s.jsx)(n.code,{children:".json"})," files:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"version": 1, "robots": [{"robot_id": "", "robot_peer_id": "12D3KooWFgRQ9bF2Xnu8UmVURssJLgL9gAdMdYbbs4g7fKGxkTf3", "robot_public_key": "Vx0g5l4VGapu89LIo0dB7q6q1HLSj+5cj/Mgl0OE7U4=", "name": "Spot", "tags": []}], "users": [{"public_key": "", "username": "new_user", "tags": []}]}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Much better, right?"}),"\n",(0,s.jsx)(n.h3,{id:"agent-stores-job-history",children:"Agent Stores Job History"}),"\n",(0,s.jsx)(n.p,{children:"Previously, as only job execution reached it's end, we've got no way to get info about it. From now on, agent stores history in jobs.json files locally."}),"\n",(0,s.jsx)(n.p,{children:"CLI Job Info and Logs\nBuilding on our new job history feature, the CLI can now provide detailed information about job executions. This is like giving you a backstage pass to see what\u2019s happening behind the scenes. To get this info, use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rn jobs info <ROBOT_NAME> <JOB_ID>\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output will look something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{\n    'type': 'MessageResponse',\n    'response_type': 'JobInfo',\n    'job_info': {\n        'job_type': 'DockerJobInfo',\n        'container_id': 'ad46ad157dc1ff1af776595c834eeb5fa855d76ae497c3bbec570699a88f8caa',\n        'image': 'hello-world:linux',\n        'docker_status': 'removed',\n        'last_logs': '\\nHello from Docker!\\nThis message shows that your installation appears to be working correctly.\\n\\nTo generate \nthis message, Docker took the following steps:\\n 1. The Docker client contacted the Docker daemon.\\n 2. The Docker daemon pulled the \n\"hello-world\" image from the Docker Hub.\\n    (arm64v8)\\n 3. The Docker daemon created a new container from that image which runs the\\n\nexecutable that produces the output you are currently reading.\\n 4. The Docker daemon streamed that output to the Docker client, which \nsent it\\n    to your terminal.\\n\\nTo try something more ambitious, you can run an Ubuntu container with:\\n $ docker run -it ubuntu \nbash\\n\\nShare images, automate workflows, and more with a free Docker ID:\\n https://hub.docker.com/\\n\\nFor more examples and ideas, \nvisit:\\n https://docs.docker.com/get-started/\\n\\n'\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"encryption",children:"Encryption"}),"\n",(0,s.jsxs)(n.p,{children:["Security is a top priority. Even though libp2p guarantees a secure channel between agents, we can't always trust other agents, especially the public ones. Now, our agent supports message encryption using ",(0,s.jsx)(n.code,{children:"ChaCha20-Poly1305"}),". However, to make this work seamlessly, we need to implement the same encryption/decryption functions on the CLI and web app (check the next diary, we did a crazy thing). So, encryption is temporarily disabled."]}),"\n",(0,s.jsx)(n.h3,{id:"wireguard-setup",children:"Wireguard Setup"}),"\n",(0,s.jsx)(n.p,{children:"We've successfully conducted experiments with manual VPN setup. The next exciting step is to automate the deployment. Soon, setting up a VPN will be as easy as pie, with just a few commands."}),"\n",(0,s.jsx)(n.h3,{id:"data-storage",children:"Data Storage"}),"\n",(0,s.jsx)(n.p,{children:"Introducing the Data Node - an agent in storage mode that stores accepted files. Imagine it as your personal data vault, storing logs, camera frames, and more. The API already has a mock version, and we're actively developing it for the next release."}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Implement Encryption for CLI - Ensuring that your agent's messages remain private."}),"\n",(0,s.jsx)(n.li,{children:"Automate Wireguard Deployment - Making VPN setup simple and hassle-free."}),"\n",(0,s.jsx)(n.li,{children:"Develop Data Node API - Turning the mock version into a fully functional reality."}),"\n",(0,s.jsx)(n.li,{children:"Create Logs Module - Storing each agent's actions in a readable format."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"That's all for today's update! We're making fantastic progress. Stay tuned!"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(6540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}},9267:e=>{e.exports=JSON.parse('{"permalink":"/blog/updates-2024-11-18","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-11-18-development-dairy.md","source":"@site/blog/2024-11-18-development-dairy.md","title":"Development Diary November 2024","description":"Welcome to another update on our development journey! We\'ve been hard at work and have some exciting new features and improvements to share with you. Let\'s dive in!","date":"2024-11-18T00:00:00.000Z","tags":[{"inline":false,"label":"Development","permalink":"/blog/tags/development","description":"Development tag description"},{"inline":false,"label":"Agent","permalink":"/blog/tags/agent","description":"Agent tag description"}],"readingTime":3.375,"hasTruncateMarker":false,"authors":[{"name":"Alex Smekhnov","title":"Developer","url":"https://github.com/smehnov","page":{"permalink":"/blog/authors/alex"},"socials":{"x":"https://x.com/asmehnov","github":"https://github.com/smehnov"},"imageURL":"https://avatars.githubusercontent.com/smehnov","key":"alex"},{"name":"Arseniy Popov","title":"Developer","url":"https://github.com/greatestParrot","page":{"permalink":"/blog/authors/arseniy"},"socials":{"x":"https://x.com/GreatestParrot","github":"https://github.com/greatestParrot"},"imageURL":"https://avatars.githubusercontent.com/greatestParrot","key":"arseniy"}],"frontMatter":{"slug":"updates-2024-11-18","title":"Development Diary November 2024","authors":["alex","arseniy"],"tags":["development","agent"]},"unlisted":false,"prevItem":{"title":"Welcome to the Web Application","permalink":"/blog/updates-2024-12-14"}}')}}]);