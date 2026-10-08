# The Velvet Lounge
npm install && npm run dev      (Home, About, Menu, Gallery, Events, Contact + live chat)
npm run build:single            (one-file build in dist/index.html)
Edit text, menu items and prices in src/data.js. Photos live in src/assets.

## Live chat -> n8n
1. n8n: add a **Webhook** node (POST, path `velvet-lounge-chat`, Response: "Using 'Respond to Webhook' node").
2. In the Webhook node > Options > **Allowed Origins (CORS)** add your site URL (or `*` while testing).
3. Process the message (AI Agent, Switch, WhatsApp/Telegram forward, etc.), then end with **Respond to Webhook** returning JSON: `{ "reply": "Your answer here" }`
4. Copy the **Production URL**, copy `.env.example` to `.env`, set `VITE_N8N_WEBHOOK_URL`, restart `npm run dev` (rebuild for production).

Request body sent by the site:
{ "sessionId": "vl-...", "message": "text", "page": "#/menu", "source": "website", "sentAt": "ISO date" }
Use `sessionId` as the memory key in an AI Agent node so each visitor keeps their conversation.

## Git
git init && git add . && git commit -m "Initial commit"
(.gitignore already excludes node_modules, dist and .env)
