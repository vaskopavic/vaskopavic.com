---
title: "Enhancing Astro View Transitions with GSAP Animations"
description: "Learn how to seamlessly integrate GSAP animations with Astro's ViewTransitions to create smooth and engaging user experiences on your website."
cover: "../../assets/blog/astro_thumbnail.jpg"
coverAlt: "Astro's logo displayed over a space-themed background"
category: "Blog"
createdAt: 1718539200
---

A key component of developing a fantastic website experience is making seamless, captivating page transitions, which can significantly increase user retention. Astro is a popular choice for contemporary websites that load rapidly because of its reputation for being lightweight and quick. However, it can be challenging to incorporate sophisticated animations into Astro's ViewTransitions, such as those from the potent GSAP (GreenSock Animation Platform). We'll examine how to integrate Astro's ViewTransitions with GSAP animations in this post.

## The Challenge

Astro is all about efficiency, delivering optimized, mostly static sites with minimal JavaScript out of the box. This keeps things running fast but makes it a bit harder to add in the rich, interactive animations that GSAP is great at. Integrating GSAP with Astro’s ViewTransitions takes a few extra steps to get it right.

## What’s Going on with ViewTransitions in Astro?


Astro’s ViewTransitions are designed to give users a smooth, almost cinematic feel when moving between pages or sections. Usually, these transitions are handled by JavaScript, which can be hard to sync up with GSAP animations, especially in single-page applications (SPAs). Astro’s way of bundling scripts and re-running them with every page load can end up cluttering the site, slowing things down, and making it a bit messier than we’d like.


Let’s look at how to overcome these obstacles so we can get the best of both worlds: Astro’s speed and GSAP’s animation power.


## The Solution

If you’re ready to bring GSAP animations into Astro’s ViewTransitions, here’s a straightforward way to make it work:

### 1. Install GSAP

First things first, you’ll need to add GSAP to your Astro project. Open up your terminal and run this command:

```bash
yarn add gsap
```

### 2. Set Up Astro Transitions and GSAP

Adjust your main Astro layout file as follows:

```astro title="src/layouts/main.astro" ins={2, 7, 11-20}
---
import { ViewTransitions } from 'astro:transitions';
---
<html lang="en">
  <head>
    <title>Welcome to Astro</title>
    <ViewTransitions />
  </head>
  <body>
    <slot />
    <script>
      import gsap from "gsap";
      import { ScrollTrigger } from "gsap/ScrollTrigger";

      window.gsap = gsap;
      window.ScrollTrigger = ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);
      gsap.config({ nullTargetWarn: false });
    </script>
  </body>
</html>
```

Including the ViewTransitions component in the head section ensures it is loaded universally, transforming your site into a Single Page Application (SPA) with smooth transition effects. Importing GSAP within the layout file's client-side script eliminates the need for redundant module imports on each page, streamlining performance.

Update your `src/env.d.ts` file to enable proper type checking for GSAP across your project:

```typescript title="src/env.d.ts" ins={3-6}
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface Window {
  gsap: typeof import("gsap").gsap;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
}
```

### 3. Implement GSAP Animations

In each `.astro` file where GSAP animations are utilized, manage animation initialization and cleanup by listening to custom Astro events:

```astro title="src/pages/index.astro" ins={3-5, 7-41}
<Layout>
    <h1>Welcome to Astro</h1>
  <div class="animate-text">
    Enjoy seamless transitions with GSAP animations.
  </div>
</Layout>
<script>
  let ctx: gsap.Context | null = null;
  let wantToInitialize = false;

  document.addEventListener(
    "astro:page-load",
    () => {
      const currentPath = window.location.pathname;
      wantToInitialize = currentPath === "/";

      if (wantToInitialize) {
        ctx = gsap.context(() => {});

        ctx?.add(() => {
          gsap.from(".animate-text", {
            y: "100%",
            opacity: 0,
            scrollTrigger: {
              trigger: ".animate-text",
              start: "top bottom",
            },
          });
        });
      }
    },
    { once: false }
  );

  document.addEventListener("astro:after-swap", () => {
    if (ctx != null) {
      ctx?.revert();
      ctx = null;
    }
  });
</script>
```

Listen for the `astro:page-load` event to initiate scripts selectively, preventing unnecessary clutter and script execution.

To ensure GSAP animations work smoothly alongside Astro’s ViewTransitions during page changes, it’s crucial to properly clean up animations. You can achieve this by using GSAP’s Context API to manage animations effectively. Listen for the `astro:after-swap` event to revert animations, ensuring they don’t disrupt Astro’s transitions between pages.

## Conclusion

Integrating GSAP animations with Astro's ViewTransitions necessitates thoughtful configuration but yields a seamless and visually appealing user experience. By following the outlined steps, harness the power of GSAP animations while leveraging Astro's performance advantages. Experiment with diverse animations and transitions to create compelling websites that captivate users and leave a lasting impression.

For questions or feedback, feel free to reach out to me on X at [@vaskopavic](https://x.com/vaskopavic).
