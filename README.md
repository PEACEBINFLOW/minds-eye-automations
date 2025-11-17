# Mind's Eye Automations

The automation & workflow engine of the Google-native **Mind's Eye OS**.

This service powers:
- Daily + hourly sync jobs
- Gmail / Calendar / Drive / Docs / Meet ingestion triggers
- LAW-T block generation
- Weekly summary docs (Google Docs auto-writer)
- Cognitive Pool refresh
- Search snapshots (stats + trigram analysis)
- Cloud Run task execution
- Pub/Sub event propagation
- Google Apps Script automation hooks

It is the **heartbeat** of the Mind's Eye constellation.

---

## 📂 Folder Structure

### `/scheduler`
- `dailySync.ts`
- `weeklySummary.ts`
- `lawTBlockGenerator.ts`

### `/triggers`
Google Workspace watchers:
- `gmailTrigger.ts`
- `driveTrigger.ts`
- `calendarTrigger.ts`
- `meetTrigger.ts`

### `/actions`
Side-effect actions the system performs:
- `refreshCognitivePool.ts`
- `runSearchSnapshot.ts`
- `longTermMemoryWriter.ts`

### `/google`
Google Cloud integrations:
- `appsScriptRunner.ts`
- `cloudRunInvoker.ts`
- `pubsubHandler.ts`

---

## 🚀 Quick Start

```bash
npm install
npm run build
npm start
