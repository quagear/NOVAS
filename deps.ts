export { ensureFile } from "https://deno.land/std@0.125.0/fs/mod.ts";
export { join } from "https://deno.land/std@0.125.0/path/mod.ts";
// export { readableStreamFromReader } from "https://deno.land/std@0.125.0/streams/conversion.ts";

export const sveltePath = "https://cdn.skypack.dev/svelte@3.46.4";
export { compile } from "https://cdn.jsdelivr.net/npm/svelte@3.46.4/compiler.mjs";

export {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v10.2.0/mod.ts";
