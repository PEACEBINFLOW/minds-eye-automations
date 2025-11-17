export async function calendarTrigger(calendarEvent: any) {
  console.log("[📅 calendarTrigger] Calendar event triggered:");
  console.log(calendarEvent);

  // Transform → MindEyeEvent → store

  return { ok: true };
}
