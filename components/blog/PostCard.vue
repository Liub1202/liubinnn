<script setup lang="ts">
import type { BlogPostSummary } from '~/composables/usePosts'

withDefaults(defineProps<{
  post: BlogPostSummary
  titleTag?: 'h2' | 'h3'
}>(), {
  titleTag: 'h2'
})
</script>

<template>
  <article class="grid gap-4 rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
      <span>{{ post.date }}</span>
      <span v-if="post.readingTime">{{ post.readingTime }}</span>
      <span v-if="post.location">{{ post.location }}</span>
    </div>

    <div class="grid gap-3">
      <component :is="titleTag" class="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        <NuxtLink :to="post.path" class="transition hover:text-neutral-700 dark:hover:text-neutral-200">
          {{ post.title }}
        </NuxtLink>
      </component>

      <p class="max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
        {{ post.description }}
      </p>
    </div>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>
