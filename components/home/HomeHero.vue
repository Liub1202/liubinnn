<template>
  <section class="hero-shell relative isolate overflow-hidden border-b border-neutral-200 pb-16 pt-12 dark:border-neutral-800 sm:pb-20 sm:pt-16">
    <div class="hero-glow pointer-events-none absolute inset-x-0 top-0 h-56" />

    <div class="relative grid gap-8 sm:gap-10">
      <div class="grid gap-6">
        <div class="grid gap-3">
          <p class="text-sm uppercase tracking-[0.28em] text-neutral-400 dark:text-neutral-500">
            LIUBINNN / PERSONAL LOG
          </p>
          <p class="max-w-2xl text-sm leading-7 text-neutral-500 dark:text-neutral-400">
            写代码，也读些闲书；记技术，也记那些暂时说不清、却值得想一想的念头。
          </p>
        </div>

        <div class="grid gap-5">
          <h1 class="hero-title max-w-5xl text-4xl tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
            <span class="hero-title-main">代码裁云作纸，</span>
            <span class="hero-title-accent">且借新知写春秋。</span>
          </h1>

          <p class="max-w-3xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
            这里记录我对 Web、JavaScript、TypeScript 与 AI 的学习、实践与思考。平时喜欢阅读、
            接触新事物，也喜欢把一闪而过的念头，慢慢想成一篇文章。
          </p>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        <div class="hero-card rounded-3xl border border-neutral-200/80 bg-white/80 p-5 backdrop-blur-sm dark:border-neutral-800/80 dark:bg-neutral-950/70">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            落笔
          </p>
          <p class="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
            不太想把博客写成履历表，更愿意把它当作一张长期更新的思考底稿。
          </p>
        </div>

        <div class="hero-card rounded-3xl border border-neutral-200/80 bg-white/80 p-5 backdrop-blur-sm dark:border-neutral-800/80 dark:bg-neutral-950/70">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            所思
          </p>
          <p class="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
            关心前端体验、JavaScript 与 TypeScript 的边界，也持续观察 AI 如何改变日常创作与开发。
          </p>
        </div>

        <div class="hero-card rounded-3xl border border-neutral-200/80 bg-white/80 p-5 backdrop-blur-sm dark:border-neutral-800/80 dark:bg-neutral-950/70">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            所见
          </p>
          <p class="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
            新工具、新表达、新问题，都值得靠近一点看，再挑几件真正重要的事情写下来。
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row">
        <a
          href="#recent-posts"
          class="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          先读几篇近作
        </a>
        <a
          href="#about"
          class="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-100 dark:hover:text-neutral-50"
        >
          看看我近来在想什么
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-shell {
  animation: hero-fade-up 0.75s ease-out both;
}

.hero-glow {
  background:
    radial-gradient(circle at top left, rgb(217 119 6 / 0.14), transparent 42%),
    radial-gradient(circle at 72% 18%, rgb(14 116 144 / 0.12), transparent 36%);
}

.dark .hero-glow {
  background:
    radial-gradient(circle at top left, rgb(245 158 11 / 0.12), transparent 42%),
    radial-gradient(circle at 72% 18%, rgb(34 211 238 / 0.12), transparent 36%);
}

.hero-title {
  font-family: "Iowan Old Style", "Palatino Linotype", "Noto Serif SC", "Songti SC", serif;
  font-weight: 600;
  line-height: 1.12;
  text-wrap: balance;
}

.hero-title-main,
.hero-title-accent {
  display: inline-block;
  transition:
    transform 220ms ease,
    filter 220ms ease;
}

.hero-title-accent {
  margin-left: 0.18em;
  background-image: linear-gradient(135deg, rgb(120 53 15), rgb(8 145 178));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.dark .hero-title-accent {
  background-image: linear-gradient(135deg, rgb(253 186 116), rgb(103 232 249));
}

.hero-title:hover .hero-title-main {
  transform: translateY(-1px);
}

.hero-title:hover .hero-title-accent {
  transform: translateY(-2px);
  filter: brightness(1.06);
}

.hero-card {
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    background-color 220ms ease,
    box-shadow 220ms ease;
}

.hero-card:hover {
  transform: translateY(-3px);
  border-color: rgb(163 163 163 / 0.9);
  box-shadow: 0 14px 32px rgb(23 23 23 / 0.06);
}

.dark .hero-card:hover {
  border-color: rgb(82 82 82 / 0.95);
  box-shadow: 0 14px 32px rgb(0 0 0 / 0.22);
}

@keyframes hero-fade-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-shell,
  .hero-title-main,
  .hero-title-accent,
  .hero-card {
    animation: none;
    transition: none;
  }
}
</style>
