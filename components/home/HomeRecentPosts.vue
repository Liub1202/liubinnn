<script setup lang="ts">
import type { BlogPostSummary } from '~/composables/usePosts'

defineProps<{
  posts: BlogPostSummary[]
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
      <PostCard
        v-for="post in posts"
        :key="post.path"
        :post="post"
        title-tag="h3"
      />
    </div>
  </HomeSection>
</template>
