---
title: "Bun: Join the Fast Lane in Runtime"
description: "Bun is changing the game for JavaScript developers. In this blog, we'll explore Bun's key features and provide a quick example of how to start an HTTP server."
cover: "../../assets/blog/bun_thumbnail.jpg"
coverAlt: "Image of Bun's logo over a background full of buns"
category: "Blog"
createdAt: 1694304000
---

## Meet Bun

Bun is an all-in-one JavaScript runtime and toolkit, offering bundling, testing, and package management capabilities in a single package. If you're tired of juggling multiple tools to handle your JavaScript and TypeScript projects, Bun is here to simplify your workflow.

## Key Features

- **Lightning-Fast Performance:**
  At the core of Bun's exceptional performance is its choice of the JavaScript Core engine from Safari, optimized for rapid startup times. Implemented in the Zig programming language, Bun targets performance bottlenecks and native code implementation, resulting in remarkable speed gains.

- **TypeScript Support Made Easy:**
  One standout feature of Bun is its seamless TypeScript support. Start writing TypeScript code without the headache of complex configurations. It also supports JSX and hot reloading, eliminating unnecessary dependencies.

- **Unified Modules:**
  Bun simplifies the transition from CommonJS to ES modules. Use both `import` and `require` in the same file without conflicts, ensuring compatibility with existing Node.js packages.

- **Native APIs:**
  Bun introduces native APIs for common tasks. Tasks like reading and writing to the file system become faster and easier.

- **Lightning-Fast Package Manager:**
  Bun's standalone package manager is up to 25 times faster than npm, significantly speeding up your daily tasks.

## Starting an HTTP Server with Bun

Now that you're eager to try Bun for yourself, let's dive into a quick example of how to start an HTTP server using Bun.

### 1. Install Bun

Before we dive into the code, you'll need to install Bun. You can do this easily with the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. Write your code

Now, let's create a basic HTTP server using Bun. We'll start by creating an `index.ts` file with the following code:

```typescript
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on localhost:${server.port}`);
```

### 3. Execute the code

Next, execute your code with the following command:

```bash
bun index.ts
```

And just like that, you have an HTTP server up and running. Bun's simplicity and power go hand in hand, making it a must-try for JavaScript developers.

## Conclusion

Bun is poised to transform your JavaScript development experience with its speed, convenience, and unified toolkit. Whether you're building high-performance server-side applications or crafting web applications, Bun has the tools you need. Give Bun a try and unlock the future of JavaScript development!
