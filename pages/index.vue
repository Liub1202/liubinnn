<template>
  <main class="min-h-screen bg-white px-6 py-20 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
    <div class="mx-auto flex max-w-3xl flex-col gap-8">
      <section class="flex flex-col gap-4">
        <p class="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          Personal Homepage + Blog
        </p>
        <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">
          A clean Nuxt foundation for your personal site.
        </h1>
        <p class="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
          This is the minimal starting point for the homepage and blog. The core stack, content layer,
          and directory structure are in place so we can continue with blog listing, post detail, tags,
          and theme work in the next step.
        </p>
      </section>

      <section class="grid gap-4 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 class="text-lg font-medium">Current Scope</h2>
        <ul class="grid gap-2 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Nuxt + TypeScript project skeleton</li>
          <li>@nuxt/content ready for blog posts</li>
          <li>Tailwind CSS ready for styling</li>
          <li>Clear folders for future homepage and blog expansion</li>
        </ul>
      </section>
    </div>
  </main>
</template>
