<script setup lang="ts">
import { getTagPath } from '~/composables/usePosts'
import type { BlogPostSummary } from '~/composables/usePosts'

const props = withDefaults(defineProps<{
  post: BlogPostSummary
  titleTag?: 'h2' | 'h3'
  variant?: 'default' | 'featured'
}>(), {
  titleTag: 'h2',
  variant: 'default'
})

</script>

<template>
  <article
    :class="[
      'group relative grid gap-4 overflow-hidden transition',
      props.variant === 'featured'
        ? 'h-full rounded-[2rem] border border-neutral-200/90 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:border-neutral-300 dark:border-neutral-800/90 dark:bg-neutral-950 dark:shadow-[0_20px_50px_rgba(0,0,0,0.24)] dark:hover:border-neutral-700'
        : 'rounded-3xl border border-neutral-200 bg-white p-6 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700'
    ]"
  >
    <div
      v-if="props.variant === 'featured'"
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.9))] dark:bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.12),transparent_38%),linear-gradient(180deg,rgba(10,10,10,0.96),rgba(20,20,20,0.92))]"
    />
    <div
      v-if="props.variant === 'featured'"
      class="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/70 via-white/25 to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent"
    />

    <div
      :class="[
        'relative z-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase text-neutral-400 dark:text-neutral-500',
        props.variant === 'featured' ? 'tracking-[0.22em]' : 'tracking-[0.18em]'
      ]"
    >
      <span
        v-if="props.variant === 'featured'"
        class="rounded-full border border-white/70 bg-white/75 px-3 py-1 text-[11px] font-medium text-neutral-600 shadow-[0_6px_18px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:shadow-none"
      >
        Recent
      </span>
      <span>{{ props.post.date }}</span>
      <span v-if="props.post.readingTime">{{ props.post.readingTime }}</span>
      <span v-if="props.post.location">{{ props.post.location }}</span>
    </div>

    <div class="relative z-10 grid gap-3">
      <component
        :is="titleTag"
        :class="props.variant === 'featured' ? 'text-[1.75rem] leading-tight sm:text-[1.95rem]' : 'text-2xl'"
        class="font-semibold tracking-tight text-neutral-950 dark:text-neutral-50"
      >
        <NuxtLink
          :to="props.post.path"
          class="transition hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:hover:text-neutral-200 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
        >
          {{ props.post.title }}
        </NuxtLink>
      </component>

      <p
        :class="props.variant === 'featured' ? 'max-w-none text-base leading-8' : 'max-w-2xl text-sm leading-7 sm:text-base'"
        class="text-neutral-600 dark:text-neutral-300"
      >
        {{ props.post.description }}
      </p>
    </div>

    <div class="relative z-10 flex flex-wrap gap-2">
      <NuxtLink
        v-for="tag in props.post.tags"
        :key="tag"
        :to="getTagPath(tag)"
        :class="props.variant === 'featured' ? 'border-white/70 bg-white/70 text-neutral-700 shadow-[0_8px_20px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:shadow-none' : 'border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300'"
        class="rounded-full border px-3 py-1 text-xs transition hover:border-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:hover:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
      >
        {{ tag }}
      </NuxtLink>
    </div>

    <div class="relative z-10">
      <NuxtLink
        :to="props.post.path"
        :class="props.variant === 'featured' ? 'inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/80 px-4 py-2 text-neutral-900 backdrop-blur-sm dark:border-neutral-700/80 dark:bg-neutral-900/70 dark:text-neutral-100' : 'text-neutral-500 dark:text-neutral-400'"
        class="text-sm font-medium transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:hover:text-neutral-100 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
      >
        阅读全文 →
      </NuxtLink>
    </div>
  </article>
</template>
