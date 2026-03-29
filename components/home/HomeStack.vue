<script setup lang="ts">
const stackGroups = [
  {
    title: '核心技术栈',
    items: ['Nuxt', 'TypeScript', '@nuxt/content', 'Tailwind CSS']
  },
  {
    title: '站点方向',
    items: ['个人主页', '博客', '高可读界面', '内容优先结构']
  }
]
</script>

<template>
  <HomeSection
    eyebrow="技术栈"
    title="构成这个站点的工具与方向。"
    description="这一部分提供一个快速的技术侧快照，但不会把首页变成长篇项目文档。"
  >
    <div class="grid gap-5 md:grid-cols-2">
      <section
        v-for="group in stackGroups"
        :key="group.title"
        class="grid gap-5 rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(10,10,10,0.03)] dark:border-neutral-800 dark:bg-neutral-950"
      >
        <div class="grid gap-1">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            Group
          </p>
          <h3 class="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            {{ group.title }}
          </h3>
        </div>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="item in group.items"
            :key="item"
            class="inline-flex min-h-[2.5rem] items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium leading-6 text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:shadow-none"
          >
            {{ item }}
          </span>
        </div>
      </section>
    </div>
  </HomeSection>
</template>
