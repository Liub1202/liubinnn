<template>
  <header class="border-b border-neutral-200/80 bg-white/88 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/88">
    <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <NuxtLink to="/" class="inline-flex items-center gap-3 transition hover:opacity-90">
          <img
            src="/avatar.jpg"
            alt="LiuBinnn avatar"
            class="h-11 w-11 rounded-full border border-neutral-200 object-cover dark:border-neutral-800"
          >
          <div class="grid gap-0.5">
            <span class="text-xs uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
              My Blog
            </span>
            <span class="text-sm font-semibold tracking-[0.1em] text-neutral-900 dark:text-neutral-100">
              LiuBinnn
            </span>
          </div>
        </NuxtLink>
      </div>

      <nav class="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300 sm:justify-end">
        <NuxtLink to="/" class="transition hover:text-neutral-950 dark:hover:text-neutral-50">
          首页
        </NuxtLink>
        <NuxtLink to="/blog" class="transition hover:text-neutral-950 dark:hover:text-neutral-50">
          博客
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
