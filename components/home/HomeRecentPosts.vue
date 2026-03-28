<script setup lang="ts">
import type { BlogPostSummary } from '~/composables/usePosts'

defineProps<{
  posts: BlogPostSummary[]
}>()
</script>

<template>
  <HomeSection
    id="recent-posts"
    eyebrow="最近文章"
    title="最近写作的一小块切面。"
    description="这里只展示最新的几篇内容，让首页保持“个人主页优先、内容入口其次”的节奏。"
  >
    <div class="grid gap-4">
      <BlogPostCard
        v-for="post in posts"
        :key="post.path"
        :post="post"
        title-tag="h3"
      />
    </div>
  </HomeSection>
</template>
