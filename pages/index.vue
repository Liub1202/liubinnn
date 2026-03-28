<script setup lang="ts">
const latestPosts = await useLatestPosts(3)
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
