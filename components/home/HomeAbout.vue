<template>
  <HomeSection
    id="about"
    eyebrow="关于"
    title="这里更像一张持续更新的个人主页。"
    description="它用来放我正在做的事、长期关注的方向，以及逐步累积下来的写作内容。"
  >
    <div class="grid gap-6 rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 sm:grid-cols-[1.4fr_0.8fr] sm:p-8">
      <div class="grid gap-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
        <p>
          我希望这里先传达一个稳定而直接的印象: 我是谁，在做什么，最近又把注意力放在哪些问题上。
          站点不追求复杂的包装，而是保留一种清晰、安静、方便长期维护的节奏。
        </p>
        <p>
          博客部分则承担“继续往里走”的角色。它会记录开发过程、项目笔记、工具体验，
          也会留下少量关于工作方式与个人观察的文字，让内容和个人主页自然连接起来。
        </p>
      </div>

      <div class="grid gap-4 rounded-2xl bg-neutral-50 p-5 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
        <div class="grid gap-1">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            现在在做
          </p>
          <p>前端开发、内容站点搭建，以及更稳定的个人表达方式。</p>
        </div>
        <div class="grid gap-1">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            这里会写
          </p>
          <p>文章、开发笔记、实验记录，还有一些不太喧闹的长期思考。</p>
        </div>
      </div>
    </div>
  </HomeSection>
</template>
