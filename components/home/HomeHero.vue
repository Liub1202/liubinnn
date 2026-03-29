<template>
  <section class="grid gap-8 border-b border-neutral-200 pb-16 pt-12 dark:border-neutral-800 sm:gap-10 sm:pb-20 sm:pt-16">
    <div class="grid gap-5">
      <p class="text-sm uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
        LIUBINNN / DEVELOPER NOTES
      </p>
      <div class="grid gap-4">
        <h1 class="max-w-4xl text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
          我是 Liubinnn，
          一个持续写代码、记笔记，也关心产品与表达方式的开发者。
        </h1>
        <p class="max-w-3xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
          这里是我的个人主页入口。平时主要关注 Web 开发、TypeScript、内容驱动的网站构建，
          也会写一些关于产品感受、开发过程、工具使用和个人思考的文章。
        </p>
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-3">
      <div class="rounded-3xl border border-neutral-200 p-5 dark:border-neutral-800">
        <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
          身份
        </p>
        <p class="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
          独立表达取向的开发者，持续记录代码、项目与日常观察。
        </p>
      </div>

      <div class="rounded-3xl border border-neutral-200 p-5 dark:border-neutral-800">
        <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
          方向
        </p>
        <p class="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
          关注 Nuxt、TypeScript、前端体验，以及内容型个人站点的长期建设。
        </p>
      </div>

      <div class="rounded-3xl border border-neutral-200 p-5 dark:border-neutral-800">
        <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
          写作
        </p>
        <p class="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
          这里会放文章、笔记和实验记录，让博客成为进入这些内容的清晰入口。
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
        了解我在关注什么
      </a>
    </div>
  </section>
</template>
