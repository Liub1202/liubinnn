<template>
  <header class="border-b border-neutral-200/80 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <div class="grid gap-1">
        <NuxtLink to="/" class="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-900 dark:text-neutral-100">
          Liubinnn
        </NuxtLink>
        <p class="text-xs text-neutral-500 dark:text-neutral-400">
          Personal Homepage + Blog
        </p>
      </div>

      <nav class="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
        <a href="#about" class="transition hover:text-neutral-900 dark:hover:text-neutral-100">About</a>
        <a href="#recent-posts" class="transition hover:text-neutral-900 dark:hover:text-neutral-100">Blog</a>
        <a href="#contact" class="transition hover:text-neutral-900 dark:hover:text-neutral-100">Contact</a>
      </nav>
    </div>
  </header>
</template>
