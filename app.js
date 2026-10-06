const stages=[
["01","Automation Foundations","BEGINNER","Triggers, actions, data flow and thinking in processes.","Build: Form → Google Sheets → confirmation email."],
["02","n8n Fundamentals","BEGINNER","Nodes, expressions, data mapping, IF/Switch and debugging.","Build: A lead capture and routing workflow."],
["03","APIs & Webhooks","BEGINNER+","HTTP, GET/POST, JSON, authentication, endpoints and webhooks.","Build: Connect an external API to n8n and store the response."],
["04","AI Automation","INTERMEDIATE","LLMs, prompting, structured outputs, extraction, classification and routing.","Build: AI lead qualification → CRM → personalized follow-up."],
["05","AI Agents","INTERMEDIATE","Agents vs workflows, goals, tools, memory and human approval.","Build: An agent that can use at least two business tools."],
["06","Knowledge & RAG","INTERMEDIATE","Retrieval, company knowledge, vector stores and grounding responses.","Build: A company knowledge assistant using real documents."],
["07","Business Systems","INTERMEDIATE","CRM, WhatsApp, email, databases and end-to-end process design.","Build: WhatsApp → Agent → CRM → Follow-up."],
["08","Deployment","INTERMEDIATE","n8n Cloud, local vs cloud self-hosting, credentials and production basics.","Build: Put a workflow online so it runs without your laptop."],
["09","Reliability","INTERMEDIATE+","Error handling, retries, logs, fallbacks and human-in-the-loop controls.","Build: Add failure handling and approval to a production workflow."],
["10","Portfolio & Client Readiness","READY TO SELL","Documentation, Loom demos, GitHub, case studies and explaining business outcomes.","Build: Publish three systems you can confidently demonstrate."]
];
document.querySelector("#roadmapGrid").innerHTML=stages.map(s=>`<article class="stage"><div class="stage-top"><span class="num">${s[0]}</span><span class="tag">${s[2]}</span></div><h3>${s[1]}</h3><p>${s[3]}</p><div class="challenge"><b>YOUR CHALLENGE</b><br>${s[4]}</div></article>`).join("");
const projects=[
["BEGINNER","Lead Capture System","A new enquiry arrives. Capture it, clean the data, save it and send a confirmation without manual work."],
["BEGINNER+","Smart Lead Router","Qualify an enquiry using rules, route it correctly and trigger the right follow-up."],
["INTERMEDIATE","AI Lead Qualification","Use AI to understand an enquiry, return structured data, update a CRM and generate a contextual response."],
["INTERMEDIATE","WhatsApp AI Agent","Give an agent memory and tools so it can answer questions, retrieve information and update customer records."],
["INTERMEDIATE+","Training Company System","Automate registrations, confirmations, participant records, certificates and follow-ups."],
["ADVANCED","Production Business Agent","Combine tools, memory, knowledge, approvals, logging, retries and deployment into one reliable system."]
];
document.querySelector("#projectGrid").innerHTML=projects.map(p=>`<article class="project"><small>${p[0]}</small><h3>${p[1]}</h3><p>${p[2]}</p></article>`).join("");
const resources=[
["n8n Learning","Official n8n documentation, courses and workflow concepts.","https://docs.n8n.io/"],
["n8n Templates","Reverse-engineer real workflows instead of only watching videos.","https://n8n.io/workflows/"],
["OpenAI Agents","Learn tools, orchestration and agent-building concepts.","https://developers.openai.com/"],
["Anthropic","Practical material on effective agent design and when simpler workflows are better.","https://www.anthropic.com/research/building-effective-agents"],
["Postman Learning","Learn APIs, requests, authentication and testing by doing.","https://learning.postman.com/"],
["LangChain Academy","Go deeper into agent engineering after you understand the fundamentals.","https://academy.langchain.com/"]
];
document.querySelector("#resourceGrid").innerHTML=resources.map(r=>`<article class="resource"><span class="kicker">FREE RESOURCE</span><h3>${r[0]}</h3><p>${r[1]}</p><a href="${r[2]}" target="_blank" rel="noopener">Open resource ↗</a></article>`).join("");