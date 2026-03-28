<script setup lang="ts">
const latestPosts = await queryCollection('posts')
  .where('published', '=', true)
  .order('date', 'DESC')
  .limit(3)
  .all()
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
    <HomeHeader />

    <main class="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-20">
      <HomeHero />
      <HomeAbout />
      <HomeRecentPosts :posts="latestPosts" />
      <HomeStack />
      <HomeContact />
    </main>

    <HomeFooter />
  </div>
</template>
