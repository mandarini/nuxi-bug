export function loadNuxiDynamicImport() {
  return Function('return import("nuxi")')() as Promise<typeof import("nuxi")>;
}
export async function run() {
  const { runCommand } = await loadNuxiDynamicImport();
  await runCommand("dev", ["my-nuxt-app"]);
  return true;
}

run();