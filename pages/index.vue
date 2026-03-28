<script setup lang="ts">
const latestPosts = await queryCollection('posts')
  .where('published', '=', true)
  .order('date', 'DESC')
  .limit(3)
  .all()
</script>

<template>
  <main class="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-20">
    <HomeHero />
    <HomeAbout />
    <HomeRecentPosts :posts="latestPosts" />
    <HomeStack />
    <HomeContact />
    <HomeFooter />
  </main>
</template>
