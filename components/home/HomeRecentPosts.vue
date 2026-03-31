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
    title="先从最近写下的几篇开始。"
    description="首页先把文章端上来，不急着解释太多。挑一篇顺眼的读下去，就差不多知道这里会写些什么。"
  >
    <div class="grid gap-4 lg:grid-cols-2">
      <BlogPostCard
        v-for="post in posts"
        :key="post.path"
        :post="post"
        title-tag="h3"
        variant="featured"
      />
    </div>
  </HomeSection>
</template>
