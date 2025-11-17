export async function gmailTrigger(message: any) {
  console.log("[📩 Gmail Trigger] New Gmail event:");
  console.log(message);

  // normalize → send to minds-eye-core
  return { ok: true };
}
