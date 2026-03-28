<script setup lang="ts">
import { computed } from 'vue'
import { createError, useHead, useRoute } from '#imports'

const route = useRoute()
const currentTag = computed(() => decodeURIComponent(route.params.tag as string))
const posts = await usePostsByTag(currentTag.value)

if (!currentTag.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Tag not found'
  })
}

useHead({
  title: `#${currentTag.value} - Blog - Liubinnn`,
  meta: [
    {
      name: 'description',
      content: `Posts tagged with ${currentTag.value}.`
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
        <span>Back to Blog</span>
      </NuxtLink>

      <div class="grid gap-4">
        <p class="text-sm uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
          Tag
        </p>
        <h1 class="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          #{{ currentTag }}
        </h1>
        <p class="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
          {{ posts.length }} post<span v-if="posts.length !== 1">s</span> tagged with {{ currentTag }}.
        </p>
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
      No posts have been published with this tag yet.
    </section>
  </main>
</template>
