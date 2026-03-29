<script setup lang="ts">
import { createError, useHead, useRoute } from '#imports'
import { getTagPath } from '~/composables/usePosts'

const route = useRoute()
const slug = route.params.slug as string

const post = await usePostDetailBySlug(slug)
const adjacentPosts = await useAdjacentPostsBySlug(slug)

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: '文章不存在'
  })
}

useHead({
  title: `${post.title} - Blog - Liubinnn`,
  meta: [
    {
      name: 'description',
      content: post.description
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
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
          <span>{{ post.date }}</span>
          <span v-if="post.readingTime">{{ post.readingTime }}</span>
          <span v-if="post.location">{{ post.location }}</span>
        </div>

        <div class="grid gap-3">
          <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
            {{ post.title }}
          </h1>
          <p class="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
            {{ post.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <NuxtLink
            v-for="tag in post.tags"
            :key="tag"
            :to="getTagPath(tag)"
            class="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 transition hover:border-neutral-400 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-neutral-100 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
          >
            {{ tag }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <article class="post-body mx-auto w-full max-w-3xl">
      <ContentRenderer :value="post" />
    </article>

    <section
      v-if="adjacentPosts.previous || adjacentPosts.next"
      class="mx-auto grid w-full max-w-3xl gap-4 border-t border-neutral-200 pt-10 dark:border-neutral-800 sm:grid-cols-2"
    >
      <NuxtLink
        v-if="adjacentPosts.previous"
        :to="adjacentPosts.previous.path"
        class="grid gap-3 rounded-3xl border border-neutral-200 p-5 transition hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:border-neutral-800 dark:hover:border-neutral-700 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
      >
        <span class="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
          上一篇
        </span>
        <h2 class="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          {{ adjacentPosts.previous.title }}
        </h2>
        <p class="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          {{ adjacentPosts.previous.date }}
        </p>
      </NuxtLink>

      <div
        v-else
        class="hidden sm:block"
      />

      <NuxtLink
        v-if="adjacentPosts.next"
        :to="adjacentPosts.next.path"
        class="grid gap-3 rounded-3xl border border-neutral-200 p-5 text-left transition hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:border-neutral-800 dark:hover:border-neutral-700 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950 sm:text-right"
      >
        <span class="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
          下一篇
        </span>
        <h2 class="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          {{ adjacentPosts.next.title }}
        </h2>
        <p class="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          {{ adjacentPosts.next.date }}
        </p>
      </NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.post-body {
  color: rgb(82 82 82);
  line-height: 1.9;
  font-size: 1rem;
}

.dark .post-body {
  color: rgb(212 212 212);
}

.post-body :deep(h1),
.post-body :deep(h2),
.post-body :deep(h3),
.post-body :deep(h4) {
  color: rgb(10 10 10);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.dark .post-body :deep(h1),
.dark .post-body :deep(h2),
.dark .post-body :deep(h3),
.dark .post-body :deep(h4) {
  color: rgb(250 250 250);
}

.post-body :deep(h1) {
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1.25rem;
}

.post-body :deep(h2) {
  font-size: 1.55rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.post-body :deep(h3) {
  font-size: 1.25rem;
  margin-top: 2.25rem;
  margin-bottom: 0.85rem;
}

.post-body :deep(p),
.post-body :deep(ul),
.post-body :deep(ol),
.post-body :deep(blockquote) {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.post-body :deep(ul),
.post-body :deep(ol) {
  padding-left: 1.35rem;
}

.post-body :deep(li) {
  margin-top: 0.45rem;
}

.post-body :deep(a) {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.post-body :deep(code) {
  border-radius: 0.45rem;
  background: rgb(245 245 245);
  padding: 0.15rem 0.4rem;
  font-size: 0.92em;
}

.dark .post-body :deep(code) {
  background: rgb(38 38 38);
}

.post-body :deep(pre) {
  overflow-x: auto;
  border-radius: 1rem;
  background: rgb(10 10 10);
  color: rgb(245 245 245);
  padding: 1rem 1.1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.post-body :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
}

.post-body :deep(blockquote) {
  border-left: 3px solid rgb(212 212 212);
  padding-left: 1rem;
  color: rgb(115 115 115);
}

.dark .post-body :deep(blockquote) {
  border-left-color: rgb(82 82 82);
  color: rgb(163 163 163);
}
</style>
