<script setup lang="ts">
type HomePost = {
  title: string
  description: string
  date: string
  tags?: string[]
  readingTime?: string
  location?: string
  path?: string
}

defineProps<{
  posts: HomePost[]
}>()
</script>

<template>
  <HomeSection
    id="recent-posts"
    eyebrow="Recent Posts"
    title="A small window into the latest writing."
    description="Only the latest posts appear here so the homepage stays personal first and content-aware second."
  >
    <div class="grid gap-4">
      <article
        v-for="post in posts"
        :key="`${post.title}-${post.date}`"
        class="grid gap-4 rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
      >
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
          <span>{{ post.date }}</span>
          <span v-if="post.readingTime">{{ post.readingTime }}</span>
          <span v-if="post.location">{{ post.location }}</span>
        </div>

        <div class="grid gap-3">
          <h3 class="text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            {{ post.title }}
          </h3>
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
    </div>
  </HomeSection>
</template>
