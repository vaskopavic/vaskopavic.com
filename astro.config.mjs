import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  site: "https://vaskopavic.com",
  integrations: [tailwind(), react()],
  markdown: {
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl my-2",
          h2: "text-2xl my-2",
          h3: "text-xl my-2",
          h4: "text-lg my-2",
          h5: "my-2",
          h6: "my-2",
          img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
          p: "mb-4",
          a: "underline underline-offset-2 hover:text-accent dark:hover:text-accent-dark decoration-accent dark:decoration-accent-dark",
        },
      ],
    ],
  },
});
