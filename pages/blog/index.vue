<script setup lang="ts">
const posts = await usePublishedPosts()
</script>

<template>
  <main class="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 py-16">
    <section class="grid gap-4 border-b border-neutral-200 pb-10 dark:border-neutral-800">
      <p class="text-sm uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
        Blog
      </p>
      <h1 class="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        Writing, notes, and experiments.
      </h1>
      <p class="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
        A simple list page for the content layer. It stays intentionally minimal and leaves room for tags,
        post detail pages, and richer navigation in the next phase.
      </p>
    </section>

    <section class="grid gap-4">
      <PostCard
        v-for="post in posts"
        :key="post.path"
        :post="post"
      />
    </section>
  </main>
</template>
