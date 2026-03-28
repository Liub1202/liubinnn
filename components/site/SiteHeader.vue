<template>
  <header class="border-b border-neutral-200/80 bg-white/88 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/88">
    <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div class="grid gap-1">
        <NuxtLink to="/" class="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-900 dark:text-neutral-100">
          Liubinnn
        </NuxtLink>
        <p class="text-xs text-neutral-500 dark:text-neutral-400">
          Personal Homepage + Blog
        </p>
      </div>

      <nav class="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300 sm:justify-end">
        <NuxtLink to="/" class="transition hover:text-neutral-950 dark:hover:text-neutral-50">
          Home
        </NuxtLink>
        <NuxtLink to="/blog" class="transition hover:text-neutral-950 dark:hover:text-neutral-50">
          Blog
        </NuxtLink>
        <a
          href="https://github.com/Liub1202"
          target="_blank"
          rel="noreferrer"
          class="transition hover:text-neutral-950 dark:hover:text-neutral-50"
        >
          GitHub
        </a>
        <SiteThemeToggle />
      </nav>
    </div>
  </header>
</template>
