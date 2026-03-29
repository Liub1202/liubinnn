<script setup lang="ts">
import { computed } from 'vue'
import { createError, useHead, useRoute } from '#imports'
import { getTagPath } from '~/composables/usePosts'

const route = useRoute()
const currentTag = computed(() => decodeURIComponent(route.params.tag as string))
const posts = await usePostsByTag(currentTag.value)

if (!currentTag.value) {
  throw createError({
    statusCode: 404,
    statusMessage: '标签不存在'
  })
}

useHead({
  title: `#${currentTag.value} - Blog - Liubinnn`,
  meta: [
    {
      name: 'description',
      content: `按标签 ${currentTag.value} 聚合的文章列表。`
    }
  ]
})
</script>

<template>
  <main class="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 py-16">
    <section class="grid gap-6 border-b border-neutral-200 pb-10 dark:border-neutral-800">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        <span aria-hidden="true">←</span>
        <span>返回博客列表</span>
      </NuxtLink>

      <div class="grid gap-4">
        <p class="text-sm uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
          标签
        </p>
        <h1 class="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          #{{ currentTag }}
        </h1>
        <p class="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
          浏览所有带有「{{ currentTag }}」标签的文章。当前共收录 {{ posts.length }} 篇内容。
        </p>
        <div class="flex flex-wrap gap-2">
          <NuxtLink
            :to="getTagPath(currentTag)"
            class="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
          >
            当前标签 · #{{ currentTag }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      v-if="posts.length > 0"
      class="grid gap-4"
    >
      <BlogPostCard
        v-for="post in posts"
        :key="post.path"
        :post="post"
      />
    </section>

    <section
      v-else
      class="rounded-3xl border border-neutral-200 px-6 py-8 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
    >
      这个标签下暂时还没有已发布的文章。
    </section>
  </main>
</template>
