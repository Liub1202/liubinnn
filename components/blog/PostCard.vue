<script setup lang="ts">
import type { BlogPostSummary } from '~/composables/usePosts'

const props = withDefaults(defineProps<{
  post: BlogPostSummary
  titleTag?: 'h2' | 'h3'
}>(), {
  titleTag: 'h2'
})
</script>

<template>
  <NuxtLink
    :to="props.post.path"
    class="group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
  >
    <article class="grid gap-4 rounded-3xl border border-neutral-200 p-6 transition group-hover:border-neutral-300 dark:border-neutral-800 dark:group-hover:border-neutral-700">
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
        <span>{{ props.post.date }}</span>
        <span v-if="props.post.readingTime">{{ props.post.readingTime }}</span>
        <span v-if="props.post.location">{{ props.post.location }}</span>
      </div>

      <div class="grid gap-3">
        <component :is="titleTag" class="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          <span class="transition group-hover:text-neutral-700 dark:group-hover:text-neutral-200">
            {{ props.post.title }}
          </span>
        </component>

        <p class="max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
          {{ props.post.description }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in props.post.tags"
          :key="tag"
          class="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
        >
          {{ tag }}
        </span>
      </div>

      <span class="text-sm font-medium text-neutral-500 transition group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100">
        Read article →
      </span>
    </article>
  </NuxtLink>
</template>
