<script setup lang="ts">
import type { BlogPostSummary } from '~/composables/usePosts'

const props = withDefaults(defineProps<{
  post: BlogPostSummary
  titleTag?: 'h2' | 'h3'
}>(), {
  titleTag: 'h2'
})

const getTagPath = (tag: string) => `/tags/${encodeURIComponent(tag)}`
</script>

<template>
  <article class="grid gap-4 rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
      <span>{{ props.post.date }}</span>
      <span v-if="props.post.readingTime">{{ props.post.readingTime }}</span>
      <span v-if="props.post.location">{{ props.post.location }}</span>
    </div>

    <div class="grid gap-3">
      <component :is="titleTag" class="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        <NuxtLink
          :to="props.post.path"
          class="transition hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:hover:text-neutral-200 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
        >
          {{ props.post.title }}
        </NuxtLink>
      </component>

      <p class="max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
        {{ props.post.description }}
      </p>
    </div>

    <div class="flex flex-wrap gap-2">
      <NuxtLink
        v-for="tag in props.post.tags"
        :key="tag"
        :to="getTagPath(tag)"
        class="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 transition hover:border-neutral-400 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-neutral-100 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
      >
        {{ tag }}
      </NuxtLink>
    </div>

    <div>
      <NuxtLink
        :to="props.post.path"
        class="text-sm font-medium text-neutral-500 transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:text-neutral-400 dark:hover:text-neutral-100 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
      >
        阅读全文 →
      </NuxtLink>
    </div>
  </article>
</template>
