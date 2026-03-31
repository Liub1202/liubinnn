<script setup lang="ts">
defineProps<{
  featuredTags: Array<{
    name: string
    count: number
    path: string
  }>
}>()

const thoughtEntries = [
  {
    title: '前端体验里那些不显眼但很关键的细节',
    description: '更在意页面如何被真正地浏览、理解和使用，而不是只停留在“做出来了”。'
  },
  {
    title: 'AI 工具进入日常工作流之后，哪些地方真的变快了',
    description: '对新工具保持兴趣，但会更慢一点地判断它们究竟改变了什么。'
  },
  {
    title: '怎么让写作成为一种可持续维护的整理方式',
    description: '比起一口气写很多，更想把这里做成一个能长期回头补充和修订的地方。'
  }
]
</script>

<template>
  <HomeSection
    id="about"
    eyebrow="正在思考"
    title="写作之外，也顺手把一些关注的问题收拢起来。"
    description="它们未必都已经写成文章，但会先以提纲、片段或主题的方式留在这里，慢慢长成更完整的内容。"
  >
    <div class="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
      <div class="grid gap-4">
        <article
          v-for="entry in thoughtEntries"
          :key="entry.title"
          class="rounded-3xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"
        >
          <h3 class="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            {{ entry.title }}
          </h3>
          <p class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
            {{ entry.description }}
          </p>
        </article>
      </div>

      <aside class="grid gap-5 rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <div class="grid gap-2">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            归档主题
          </p>
          <p class="text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
            先按主题往里走，比先认识我更重要。
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <NuxtLink
            v-for="tag in featuredTags"
            :key="tag.name"
            :to="tag.path"
            class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
          >
            <span>{{ tag.name }}</span>
            <span class="text-xs text-neutral-400 dark:text-neutral-500">{{ tag.count }}</span>
          </NuxtLink>
        </div>

        <div class="grid gap-2 rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-900">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            关于这个 blog
          </p>
          <p class="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            它更像一份长期维护的个人笔记，而不是一张需要时刻更新的主页。能不断写下去，比显得完整更重要。
          </p>
        </div>
      </aside>
    </div>
  </HomeSection>
</template>
