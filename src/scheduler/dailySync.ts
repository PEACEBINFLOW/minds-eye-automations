export async function dailySync() {
  console.log("[⏰ dailySync] Running");

  // Hit connectors or ingestion endpoints
  // Example:
  // await fetch("https://your-connectors/events/ingest", { method: "POST" });

  return { ok: true, ranAt: new Date().toISOString() };
}
