<template>
  <section class="grid gap-8 border-b border-neutral-200 pb-16 pt-12 dark:border-neutral-800 sm:gap-10 sm:pb-20 sm:pt-16">
    <div class="grid gap-5">
      <p class="text-sm uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
        开发者极简风
      </p>
      <div class="grid gap-4">
        <h1 class="max-w-4xl text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
          做一个安静、清晰，并且以内容为入口的个人主页。
        </h1>
        <p class="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
          这个首页优先介绍我是谁、在做什么，以及内容写作放在哪里，
          而不是一上来就把落地页变成完整的文章归档列表。
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-4 sm:flex-row">
      <a
        href="#recent-posts"
        class="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200"
      >
        查看最近文章
      </a>
      <a
        href="#about"
        class="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-100 dark:hover:text-neutral-50"
      >
        了解这个站点
      </a>
    </div>
  </section>
</template>
