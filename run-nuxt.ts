import { runCommand } from "nuxi";

export async function run() {
  await runCommand("dev", ["my-nuxt-app"]);
  return true;
}

run();
