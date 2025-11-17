export async function pubsubHandler(pubsubEvent: any) {
  const message = JSON.parse(
    Buffer.from(pubsubEvent.data, "base64").toString()
  );

  console.log("[📡 PubSub] Received:", message);

  return { ok: true };
}
