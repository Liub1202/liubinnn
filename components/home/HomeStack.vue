<script setup lang="ts">
const stackGroups = [
  {
    title: '核心技术栈',
    items: ['Nuxt', 'TypeScript', '@nuxt/content', 'Tailwind CSS']
  },
  {
    title: '站点方向',
    items: ['个人主页', 'Blog', '高可读界面', '内容优先结构']
  }
]
</script>

<template>
  <HomeSection
    eyebrow="技术栈"
    title="构成这个站点的工具与方向。"
    description="这一部分提供一个快速的技术侧快照，但不会把首页变成长篇项目文档。"
  >
    <div class="grid gap-4 md:grid-cols-2">
      <section
        v-for="group in stackGroups"
        :key="group.title"
        class="grid gap-4 rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800"
      >
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {{ group.title }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in group.items"
            :key="item"
            class="rounded-full bg-neutral-100 px-3 py-2 text-sm text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
          >
            {{ item }}
          </span>
        </div>
      </section>
    </div>
  </HomeSection>
</template>
