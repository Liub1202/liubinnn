<template>
  <HomeSection
    id="about"
    eyebrow="关于"
    title="先是个人主页，其次才是有结构的内容入口。"
    description="这个落地页应该先让访客理解站点背后的人，再引导他们进入 Blog 内容。"
  >
    <div class="grid gap-6 rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800 sm:grid-cols-[1.4fr_0.8fr] sm:p-8">
      <div class="grid gap-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
        <p>
          这个项目从一开始就被定义为个人站点，而不是内容平台。首页负责呈现身份、方向和关注点，
          Blog 则作为清晰的内容入口存在，而不是反过来主导整个访问体验。
        </p>
        <p>
          最终它应该像一张安静的开发者名片：可读、克制、有留白，并且能够在不破坏第一版简洁性的前提下，
          平滑扩展出更多模块。
        </p>
      </div>

      <div class="grid gap-4 rounded-2xl bg-neutral-50 p-5 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
        <div class="grid gap-1">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            重点
          </p>
          <p>个人表达、写作内容，以及清晰的 Blog 入口。</p>
        </div>
        <div class="grid gap-1">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            原则
          </p>
          <p>先让首页保持简洁，再让内容把访问逐步加深。</p>
        </div>
      </div>
    </div>
  </HomeSection>
</template>
