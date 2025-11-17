export async function meetTrigger(transcriptPayload: any) {
  console.log("[🎤 meetTrigger] Meet transcript event:");
  console.log(transcriptPayload);

  // Later: convert transcript → event

  return { ok: true };
}
