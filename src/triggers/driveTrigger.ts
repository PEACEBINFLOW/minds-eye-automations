export async function driveTrigger(fileEvent: any) {
  console.log("[📁 driveTrigger] Drive file modified/uploaded:");
  console.log(fileEvent);

  // Later: transform into MindEyeEvent → send to core

  return { ok: true };
}
