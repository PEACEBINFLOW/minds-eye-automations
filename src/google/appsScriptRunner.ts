export async function runAppsScript(scriptUrl: string, payload: any) {
  const res = await fetch(scriptUrl, {
    method: "POST",
    body: JSON.stringify(payload)
  });

  return await res.json();
}
