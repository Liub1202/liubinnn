<script setup lang="ts">
import { useHead } from '#imports'

const posts = await usePublishedPosts()

useHead({
  title: 'Blog - Liubinnn',
  meta: [
    {
      name: 'description',
      content: 'Liubinnn 的文章、笔记与实验列表。'
    }
  ]
})
</script>

<template>
  <main class="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 py-16">
    <section class="grid gap-4 border-b border-neutral-200 pb-10 dark:border-neutral-800">
      <p class="text-sm uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
        博客
      </p>
      <h1 class="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        写作、笔记与一些实验。
      </h1>
      <p class="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
        这是内容层的基础列表页。它保持克制简洁，同时为标签页、文章详情页，
        以及下一阶段更完整的内容导航预留空间。
      </p>
    </section>

    <section class="grid gap-4">
      <BlogPostCard
        v-for="post in posts"
        :key="post.path"
        :post="post"
      />
    </section>
  </main>
</template>
