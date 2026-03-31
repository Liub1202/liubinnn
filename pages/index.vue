<script setup lang="ts">
import { getTagPath } from '~/composables/usePosts'

const latestPosts = await useLatestPosts(4)
const publishedPosts = await usePublishedPosts()

const featuredTags = Object.entries(
  publishedPosts.reduce<Record<string, number>>((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] ?? 0) + 1
    })

    return acc
  }, {})
)
  .sort((left, right) => {
    if (right[1] !== left[1]) {
      return right[1] - left[1]
    }

    return left[0].localeCompare(right[0], 'zh-Hans-CN')
  })
  .slice(0, 4)
  .map(([name, count]) => ({
    name,
    count,
    path: getTagPath(name)
  }))
</script>

<template>
  <main class="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 sm:gap-20">
    <HomeHero />
    <HomeRecentPosts :posts="latestPosts" />
    <HomeAbout :featured-tags="featuredTags" />
    <HomeContact />
    <HomeFooter />
  </main>
</template>
