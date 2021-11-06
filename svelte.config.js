import preprocess from "svelte-preprocess";
import node from "@sveltejs/adapter-node";
import yaml from "@rollup/plugin-yaml";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    target: "#svelte",
    adapter: node(),
    vite: () => ({
      plugins: [yaml()],
    }),
  },
};

export default config;
