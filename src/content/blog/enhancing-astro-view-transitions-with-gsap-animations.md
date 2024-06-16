---
title: "Enhancing Astro View Transitions with GSAP Animations"
description: "Learn how to seamlessly integrate GSAP animations with Astro's ViewTransitions to create smooth and engaging user experiences on your website."
cover: "../../assets/blog/astro_thumbnail.jpg"
coverAlt: "Astro's logo displayed over a space-themed background"
category: "Blog"
createdAt: 1718539200
---

In the dynamic realm of web development, achieving smooth and captivating page transitions is crucial for enhancing user engagement. Astro, renowned for its minimalist and performance-driven approach, provides an ideal framework for creating fast and modern websites. However, integrating advanced client-side animations, such as those powered by GSAP (GreenSock Animation Platform), can pose challenges, particularly when combined with Astro's ViewTransitions. In this blog, we'll explore a solution that allows seamless integration of GSAP animations with Astro's ViewTransitions.

## The Challenge

Astro excels in delivering optimized, static websites with minimal JavaScript by default. While this boosts performance, it complicates the integration of sophisticated client-side animations that rely on JavaScript. GSAP is widely favored for creating high-performance animations, but incorporating it alongside Astro's ViewTransitions requires some extra steps.

## Understanding ViewTransitions in Astro

Astro's ViewTransitions elevate the user experience by smoothly transitioning between pages or sections of your site. These transitions are typically managed by JavaScript, which can be challenging to synchronize with GSAP animations, especially when dealing with client-side scripts in single-page applications (SPAs). Astro's approach of bundling scripts and re-executing them on every navigation can clutter the website and degrade performance.

## The Solution

To seamlessly integrate GSAP animations with Astro's ViewTransitions, follow these steps:

### 1. Installing GSAP

Start by installing GSAP in your Astro project using the following terminal command:

```bash
yarn add gsap
```

### 2. Setting Up Astro Transitions and GSAP

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

### 3. Implementing GSAP Animations

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
