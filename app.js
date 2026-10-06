const modules=[
{n:"01",title:"Automation Thinking",level:"FOUNDATION",desc:"Learn to see business processes as systems before choosing a tool.",learn:["Spot repetitive work, delays and handoff problems","Define triggers, inputs, decisions, actions and outcomes","Separate deterministic steps from judgment","Map a process before opening any builder"],resources:[["n8n automation concepts","https://docs.n8n.io/"],["Zapier Learn","https://zapier.com/learn/"]],assignment:"Choose one repetitive business process and map it on paper. Identify the trigger, data, decisions, actions, exceptions and final business outcome.",hint:"Problem → Trigger → Data → Decision → Action → Outcome → Exception",ready:"You can look at a business problem and describe the system it needs without naming a specific tool."},
{n:"02",title:"Workflow Automation",level:"BEGINNER",desc:"Build predictable processes with visual automation tools or code.",learn:["When a deterministic workflow is the right solution","Steps, data mapping and branching","IF/Switch logic and transformations","How n8n, Make, Zapier and code differ","Debugging workflow executions"],resources:[["n8n Docs","https://docs.n8n.io/"],["Make Academy","https://academy.make.com/"],["Zapier Learn","https://zapier.com/learn/"]],assignment:"Build a simple lead-capture process in one workflow platform of your choice. Capture, clean, store and respond.",hint:"Trigger → Normalize → Rules → Store → Action",ready:"You can build and debug a multi-step workflow in at least one platform and explain how you would reproduce it elsewhere."},
{n:"03",title:"APIs, Webhooks & Integrations",level:"BEGINNER+",desc:"Learn the language that lets different tools talk to each other.",learn:["APIs, endpoints and request/response","GET, POST, headers, parameters and authentication","JSON and status codes","Webhooks and event-driven systems","Reading documentation instead of searching for an exact tutorial"],resources:[["Postman Learning","https://learning.postman.com/"],["MDN HTTP","https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"],["n8n HTTP Request","https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/"]],assignment:"Connect to an API you have never used before. Send a request, inspect the response, extract useful data and pass it into another app.",hint:"App/Event → HTTP/API → JSON Response → Transform → Destination",ready:"You can read basic API documentation and connect a new service without needing an exact step-by-step video."},
{n:"04",title:"Working With LLMs",level:"INTERMEDIATE",desc:"Use language models as reasoning components inside larger systems.",learn:["What LLMs are good and bad at","Prompt design for business tasks","Structured outputs and schemas","Classification, extraction and summarization","Tool calling and validating model output","Choosing models based on the task, not hype"],resources:[["OpenAI Developers","https://developers.openai.com/"],["Anthropic Docs","https://docs.anthropic.com/"],["Google AI for Developers","https://ai.google.dev/"]],assignment:"Use any major LLM to classify a real enquiry and return strict structured data. Validate the output before your workflow takes action.",hint:"Input → Model → Structured Output → Validate → Business Logic",ready:"You can use an LLM inside a system without letting unpredictable model output control everything."},
{n:"05",title:"AI Agents",level:"INTERMEDIATE",desc:"Understand goal-driven systems that can reason, use tools and choose actions.",learn:["Agent vs automation vs chatbot","Goals, instructions and boundaries","Tools and permissions","Memory and context","Human approval and autonomy levels","When an agent is unnecessary"],resources:[["OpenAI Developers","https://developers.openai.com/"],["Anthropic: Building Effective Agents","https://www.anthropic.com/research/building-effective-agents"],["n8n Advanced AI","https://docs.n8n.io/advanced-ai/"]],assignment:"Build an agent in a platform of your choice that can understand a request and use at least two tools to work toward a goal.",hint:"Goal → Agent → Context/Memory ↔ Tools → Decision → Action → Human if needed",ready:"You can justify when to use an agent, choose its tools and define where human control belongs."},
{n:"06",title:"Modern Agent Platforms",level:"EXPLORE",desc:"Explore new agent products without becoming dependent on any one of them.",learn:["Browser and computer-using agents","Persistent agents and routines","Coding agents and software-building agents","Where agent platforms can replace manual orchestration","Where deterministic workflows remain safer","How to evaluate a new agent product quickly"],resources:[["Grok Bot Docs","https://docs.x.ai/grok-bot/overview"],["OpenAI Developers","https://developers.openai.com/"],["Claude Code Docs","https://docs.anthropic.com/en/docs/claude-code/overview"]],assignment:"Choose one modern agent platform. Give it a real multi-step task, observe where it succeeds or fails and write down what you would automate deterministically instead.",hint:"Task → Agent capabilities → Permissions → Actions → Observe → Decide what needs a workflow",ready:"A new AI agent can launch tomorrow and you know how to evaluate it rather than starting your learning from zero."},
{n:"07",title:"Knowledge, Memory & RAG",level:"INTERMEDIATE",desc:"Give AI systems useful business context instead of relying on model memory.",learn:["Context vs persistent memory vs knowledge","Retrieval and RAG","Documents, chunking and embeddings conceptually","Vector stores and search","Grounding answers in source material","When simple search is enough"],resources:[["n8n RAG","https://docs.n8n.io/advanced-ai/rag-in-n8n/"],["Supabase AI & Vectors","https://supabase.com/docs/guides/ai"]],assignment:"Create a knowledge assistant using real documents. Test it with questions the base model could not reliably answer.",hint:"Knowledge → Index → Retrieve context → Model/Agent → Grounded answer",ready:"You can choose how an AI system should access business knowledge and test whether retrieval actually improves answers."},
{n:"08",title:"Business System Architecture",level:"INTERMEDIATE+",desc:"Combine workflows, agents, models and business tools into one coherent system.",learn:["Start from the business outcome","Choose agent vs workflow vs hybrid architecture","CRM, messaging, email and database integrations","System boundaries and handoffs","Human-in-the-loop design","Cost and complexity trade-offs"],resources:[["n8n Integrations","https://n8n.io/integrations/"],["Make Integrations","https://www.make.com/en/integrations"],["Zapier Apps","https://zapier.com/apps"]],assignment:"Design a lead-management system without committing to a platform first. Then choose the tools that best fit each part.",hint:"Channel → Understand → Decide → Execute → Store → Notify → Measure",ready:"Given a business problem, you can defend why each component is an agent, workflow, model, database or human step."},
{n:"09",title:"Deployment, Security & Reliability",level:"PRODUCTION",desc:"Make systems safe, observable and dependable after the demo works.",learn:["Cloud vs local development","Hosting and deployment options","Credentials, secrets and permissions","Retries, errors, logging and alerts","Duplicate prevention and idempotency","Backups, cost controls and human approval"],resources:[["n8n Hosting","https://docs.n8n.io/hosting/"],["OWASP Secrets Management","https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"],["Vercel Docs","https://vercel.com/docs"]],assignment:"Take a system you built earlier and make it production-aware: secure credentials, add error handling, logs, duplicate protection and an escalation path.",hint:"System → Guardrails → Execute → Log → Failure path → Retry/Escalate → Monitor",ready:"You can explain what happens when the system fails, who owns it and how credentials and sensitive actions are protected."},
{n:"10",title:"Portfolio & Client Readiness",level:"READY TO SOLVE",desc:"Prove you can solve business problems, not just operate software.",learn:["Present the pain before the technology","Architecture diagrams and documentation","Short demos and handover guides","Case studies focused on outcomes","Scoping and explaining trade-offs","Showing adaptability across tools"],resources:[["GitHub Docs","https://docs.github.com/"],["Loom","https://www.loom.com/"]],assignment:"Publish three systems that use different approaches: one deterministic workflow, one agent and one hybrid system. Explain why you chose each architecture.",hint:"Problem → Constraints → Architecture choice → Build → Demo → Outcome → Lessons",ready:"You can receive a business problem, design an appropriate system and explain your choices without defaulting to one platform."}
];

const decisions=[
{icon:"01",title:"Use a workflow when…",body:"The steps are known, the rules are predictable and reliability matters more than flexibility.",example:"Example: payment received → create enrollment → update CRM → send confirmation."},
{icon:"02",title:"Use an agent when…",body:"The system must understand context, choose between actions or work through an ambiguous task.",example:"Example: read a customer request → decide what they need → use the right tool → respond."},
{icon:"03",title:"Use a hybrid when…",body:"AI should understand or decide, but deterministic automation should execute the critical business steps.",example:"Example: agent qualifies a lead → workflow updates CRM, schedules follow-up and logs everything."}
];

const projects=[
{level:"BEGINNER",title:"Lead Capture System",type:"WORKFLOW",brief:"A business receives enquiries from a form. Staff manually copy them into a sheet and send confirmation emails.",mission:"Capture, clean, store and acknowledge each lead automatically.",success:"No lead needs manual copying and every valid submission receives confirmation."},
{level:"BEGINNER+",title:"Smart Lead Router",type:"WORKFLOW",brief:"A sales team receives mixed enquiries and wastes time deciding who should handle each one.",mission:"Route enquiries using clear business rules and trigger the correct follow-up.",success:"Each lead reaches the right owner with a visible reason for the routing decision."},
{level:"INTERMEDIATE",title:"AI Lead Qualification",type:"HYBRID",brief:"Enquiries contain free text, so fixed rules alone cannot reliably understand intent or urgency.",mission:"Use an LLM for understanding, then deterministic steps for validation, CRM updates and follow-up.",success:"AI output is structured and validated before any business action happens."},
{level:"INTERMEDIATE",title:"Customer Service Agent",type:"AGENT",brief:"Customers ask varied questions that require context and access to multiple business tools.",mission:"Build an agent with memory, knowledge and at least two useful tools.",success:"The agent answers grounded questions, uses tools correctly and escalates when uncertain."},
{level:"INTERMEDIATE+",title:"Training Company System",type:"HYBRID",brief:"Registrations, reminders, participant records, certificates and follow-ups are handled across disconnected tools.",mission:"Design an end-to-end system and decide which parts need rules, AI or human approval.",success:"The process is traceable from registration through completion without one person holding it together manually."},
{level:"ADVANCED",title:"Production Business Agent",type:"HYBRID",brief:"A useful prototype exists, but it has no proper failure handling, permissions, logs or production controls.",mission:"Add tools, knowledge, approvals, logging, retries, security boundaries and deployment.",success:"You can explain what happens when it works, fails, receives bad data or needs a human."}
];

const toolbox=[
{cat:"WORKFLOW AUTOMATION",tools:"n8n • Make • Zapier • Code",use:"Predictable multi-step processes, integrations, schedules and business rules.",learn:"Learn one deeply enough to understand data flow and debugging. Transfer the concepts to the others."},
{cat:"AGENT PLATFORMS",tools:"Grok Bot • OpenAI agent experiences • emerging platforms",use:"Flexible, goal-driven work involving context, tools, browsers or computers.",learn:"Evaluate permissions, reliability, persistence, tool access and where deterministic execution is still needed."},
{cat:"CODING AGENTS",tools:"Codex • Claude Code • Cursor-style tools",use:"Understand, create, debug and modify software with AI assistance.",learn:"Learn to specify tasks, inspect changes, test outputs and keep source control."},
{cat:"MODELS",tools:"OpenAI • Claude • Gemini • Grok • Qwen",use:"Reasoning, extraction, classification, generation and tool calling.",learn:"Choose by task, quality, latency, cost, context and required capabilities rather than brand loyalty."},
{cat:"DATA & KNOWLEDGE",tools:"Supabase • SQL • Vector stores • Drive",use:"Store business state, customer records and knowledge your systems need.",learn:"Understand structured data, retrieval, permissions and when a normal database is enough."},
{cat:"COMMUNICATION",tools:"WhatsApp • Email • Telegram • Slack",use:"Where customers and teams interact with your systems.",learn:"Understand triggers, message windows, identity, approvals and channel-specific constraints."},
{cat:"INFRASTRUCTURE",tools:"Vercel • Railway • Cloud/VPS • managed platforms",use:"Keep apps and automations online, secure and available beyond your laptop.",learn:"Understand deployment, environment variables, logs, ownership, backups and costs."},
{cat:"HUMAN CONTROL",tools:"Approvals • Exceptions • Escalations",use:"Sensitive, uncertain or high-impact decisions that should not be fully autonomous.",learn:"Design the handoff intentionally. Human-in-the-loop is architecture, not failure."}
];

const resources=[
{cat:"WORKFLOWS",name:"n8n Documentation",desc:"Workflow concepts, integrations, hosting and advanced AI.",url:"https://docs.n8n.io/"},
{cat:"WORKFLOWS",name:"Make Academy",desc:"Free learning for visual automation and scenario building.",url:"https://academy.make.com/"},
{cat:"WORKFLOWS",name:"Zapier Learn",desc:"Automation concepts and practical workflow education.",url:"https://zapier.com/learn/"},
{cat:"APIS",name:"Postman Learning Center",desc:"Requests, authentication, APIs and testing.",url:"https://learning.postman.com/"},
{cat:"APIS",name:"MDN HTTP",desc:"The web fundamentals behind requests, responses and status codes.",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},
{cat:"AI & AGENTS",name:"OpenAI Developers",desc:"Current developer resources for models, tools and agent building.",url:"https://developers.openai.com/"},
{cat:"AI & AGENTS",name:"Anthropic Documentation",desc:"Claude developer documentation and agent-building guidance.",url:"https://docs.anthropic.com/"},
{cat:"AI & AGENTS",name:"Building Effective Agents",desc:"A practical framework for deciding between workflows and agents.",url:"https://www.anthropic.com/research/building-effective-agents"},
{cat:"AI & AGENTS",name:"Google AI for Developers",desc:"Gemini models, APIs and developer resources.",url:"https://ai.google.dev/"},
{cat:"AGENT PLATFORMS",name:"Grok Bot Documentation",desc:"Learn how persistent agent capabilities, tools and routines are structured.",url:"https://docs.x.ai/grok-bot/overview"},
{cat:"DATA",name:"Supabase AI & Vectors",desc:"Databases, vector storage and retrieval for AI applications.",url:"https://supabase.com/docs/guides/ai"},
{cat:"PRODUCTION",name:"OWASP Secrets Management",desc:"Security principles for credentials and secrets.",url:"https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"},
{cat:"PRODUCTION",name:"Vercel Documentation",desc:"Deployment concepts for web applications and services.",url:"https://vercel.com/docs"},
{cat:"PORTFOLIO",name:"GitHub Docs",desc:"Version control, repositories and publishing technical work.",url:"https://docs.github.com/"}
];

const principles=[
["01","Start with pain","If you cannot explain the business problem, you are not ready to choose the technology."],
["02","Prefer simple","Do not add an agent where rules can solve the problem more reliably."],
["03","Separate thinking from execution","Let AI understand and decide where useful. Keep critical actions deterministic when possible."],
["04","Design failure","Ask what happens when the API is down, data is missing or the model is wrong."],
["05","Protect access","Give systems only the permissions they need. Treat credentials as production assets."],
["06","Measure outcomes","A clever workflow is not the goal. Time saved, faster response, lower cost or better revenue is."]
];

const scenarios=[
["Certificate issuance","Known steps and repeatable data","WORKFLOW","Registration → completion check → certificate → storage → email → record update"],
["Ambiguous support enquiry","Needs context and tool choice","AGENT","Message → understand intent → retrieve knowledge → choose tool → answer/escalate"],
["Lead management","Understanding + reliable execution","HYBRID","AI interprets enquiry → rules validate → CRM update → follow-up → human for exceptions"]
];

const progressKey="automateWithAIProgressV2";
let progress;
try{progress=JSON.parse(localStorage.getItem(progressKey))||{modules:[],projects:[]}}catch(e){progress={modules:[],projects:[]}}
if(!Array.isArray(progress.modules))progress.modules=[];
if(!Array.isArray(progress.projects))progress.projects=[];

const grid=document.querySelector("#roadmapGrid");
function renderRoadmap(){
grid.innerHTML=modules.map((m,i)=>`<article class="stage module-card ${progress.modules.includes(i)?"is-complete":""}" data-module="${i}" tabindex="0"><div class="stage-top"><span class="num">${m.n}</span><span class="tag">${m.level}</span></div><h3>${m.title}</h3><p>${m.desc}</p><div class="challenge"><b>BUILD CHALLENGE</b><br>${m.assignment}</div><div class="open-module"><span>${progress.modules.includes(i)?"✓ Completed":"Open mini module"}</span><b>→</b></div></article>`).join("");
}
renderRoadmap();

const modal=document.createElement("div");
modal.className="module-modal";
modal.innerHTML='<div class="modal-backdrop"></div><div class="module-panel" role="dialog" aria-modal="true"><button class="close-module" aria-label="Close">×</button><div id="moduleContent"></div></div>';
document.body.appendChild(modal);

function openModule(i){
const m=modules[i];
document.querySelector("#moduleContent").innerHTML=`<div class="module-head"><span class="num">STAGE ${m.n}</span><span class="tag">${m.level}</span><h2>${m.title}</h2><p>${m.desc}</p></div>
<div class="module-block"><span class="kicker">WHAT YOU'LL LEARN</span><ul>${m.learn.map(x=>`<li>${x}</li>`).join("")}</ul></div>
<div class="module-block"><span class="kicker">BEST FREE RESOURCES</span><div class="module-resources">${m.resources.map(r=>`<a href="${r[1]}" target="_blank" rel="noopener"><b>${r[0]}</b><span>Open ↗</span></a>`).join("")}</div></div>
<div class="module-block assignment"><span class="kicker">YOUR PRACTICAL ASSIGNMENT</span><h3>${m.assignment}</h3></div>
<details class="hint"><summary>Stuck? Reveal the architecture hint</summary><p>${m.hint}</p></details>
<div class="module-block completion"><span class="kicker">YOU'RE READY TO MOVE ON WHEN</span><p>${m.ready}</p></div>
<button class="complete-btn ${progress.modules.includes(i)?"done":""}" data-complete="${i}">${progress.modules.includes(i)?"✓ Stage completed":"Mark stage complete"}</button>
<div class="module-next">${i<modules.length-1?`NEXT → Stage ${modules[i+1].n}: ${modules[i+1].title}`:"ROADMAP COMPLETE → Build and publish your portfolio."}</div>`;
modal.classList.add("active");document.body.classList.add("modal-open");
}
function closeModule(){modal.classList.remove("active");document.body.classList.remove("modal-open")}
grid.addEventListener("click",e=>{const c=e.target.closest(".module-card");if(c)openModule(+c.dataset.module)});
grid.addEventListener("keydown",e=>{const c=e.target.closest(".module-card");if(c&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openModule(+c.dataset.module)}});
modal.querySelector(".close-module").onclick=closeModule;
modal.querySelector(".modal-backdrop").onclick=closeModule;
modal.addEventListener("click",e=>{const b=e.target.closest("[data-complete]");if(!b)return;const i=+b.dataset.complete;toggle("modules",i);openModule(i)});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModule()});

document.querySelector("#decisionGrid").innerHTML=decisions.map(d=>`<article class="decision-card"><span>${d.icon}</span><h3>${d.title}</h3><p>${d.body}</p><small>${d.example}</small></article>`).join("");

function renderProjects(){
document.querySelector("#projectGrid").innerHTML=projects.map((p,i)=>`<article class="project ${progress.projects.includes(i)?"project-complete":""}"><div class="project-top"><small>${p.level}</small><b>${p.type}</b></div><h3>${p.title}</h3><p><strong>Business brief:</strong> ${p.brief}</p><p><strong>Your mission:</strong> ${p.mission}</p><div class="success"><b>SUCCESS LOOKS LIKE</b><br>${p.success}</div><button class="project-check" data-project-check="${i}">${progress.projects.includes(i)?"✓ Built":"Mark as built"}</button></article>`).join("");
}
renderProjects();
document.querySelector("#projectGrid").addEventListener("click",e=>{const b=e.target.closest("[data-project-check]");if(!b)return;toggle("projects",+b.dataset.projectCheck)});

document.querySelector("#toolboxGrid").innerHTML=toolbox.map(t=>`<article class="tool-card"><span class="kicker">${t.cat}</span><h3>${t.tools}</h3><p>${t.use}</p><div class="learn-note"><b>LEARN THIS:</b> ${t.learn}</div></article>`).join("");

document.querySelector("#scenarioGrid").innerHTML=scenarios.map(s=>`<article class="scenario-row"><div><b>${s[0]}</b><span>${s[1]}</span></div><strong>${s[2]}</strong><p>${s[3]}</p></article>`).join("");

const cats=["ALL",...new Set(resources.map(r=>r.cat))];
document.querySelector("#resourceFilters").innerHTML=cats.map((c,i)=>`<button class="filter ${i===0?"active":""}" data-filter="${c}">${c}</button>`).join("");
function renderResources(cat="ALL"){
const list=cat==="ALL"?resources:resources.filter(r=>r.cat===cat);
document.querySelector("#resourceGrid").innerHTML=list.map(r=>`<article class="resource"><span class="kicker">${r.cat}</span><h3>${r.name}</h3><p>${r.desc}</p><a href="${r.url}" target="_blank" rel="noopener">Open official resource ↗</a></article>`).join("");
}
renderResources();
document.querySelector("#resourceFilters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderResources(b.dataset.filter)});

document.querySelector("#principleGrid").innerHTML=principles.map(p=>`<article><span>${p[0]}</span><h3>${p[1]}</h3><p>${p[2]}</p></article>`).join("");

function toggle(key,i){
progress[key]=progress[key].includes(i)?progress[key].filter(x=>x!==i):[...progress[key],i];
localStorage.setItem(progressKey,JSON.stringify(progress));
renderRoadmap();renderProjects();renderProgress();
}
function renderProgress(){
const done=progress.modules.length,pct=Math.round(done/modules.length*100),built=progress.projects.length;
document.querySelector("#progressBarFill").style.width=pct+"%";
document.querySelector("#progressCount").textContent=done+"/10 stages completed";
document.querySelector("#progressPercent").textContent=pct+"%";
document.querySelector("#projectsCount").textContent=built+"/6 projects built";
}
renderProgress();
function track(name,data={}){
  try{
    if(typeof window.va==="function") window.va("event",{name,...data});
    else{
      window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};
      window.va("event",{name,...data});
    }
  }catch(e){}
}
grid.addEventListener("click",e=>{const c=e.target.closest(".module-card");if(c)track("module_opened",{stage:modules[+c.dataset.module].n,title:modules[+c.dataset.module].title})});
document.querySelector("#projectGrid").addEventListener("click",e=>{const b=e.target.closest("[data-project-check]");if(b)track("project_toggled",{project:projects[+b.dataset.projectCheck].title})});
modal.addEventListener("click",e=>{const b=e.target.closest("[data-complete]");if(b)track("stage_completion_toggled",{stage:modules[+b.dataset.complete].n,title:modules[+b.dataset.complete].title})});
document.querySelectorAll('[data-track="training_cta"]').forEach(el=>el.addEventListener("click",()=>track("training_cta_clicked",{location:"bottom_cta"})));
document.querySelector("#resourceGrid").addEventListener("click",e=>{const link=e.target.closest("a");if(link)track("resource_clicked",{resource:link.closest(".resource")?.querySelector("h3")?.textContent||"unknown"})});
document.querySelector("#resourceFilters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(b)track("resource_filter_used",{category:b.dataset.filter})});
document.querySelectorAll('a[href="#roadmap"]').forEach(el=>el.addEventListener("click",()=>track("roadmap_started",{source:el.className||"link"})));
