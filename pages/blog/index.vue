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
      <article
        v-for="post in posts"
        :key="post.path"
        class="grid gap-3 rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800"
      >
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
          <span>{{ post.date }}</span>
          <span v-if="post.readingTime">{{ post.readingTime }}</span>
          <span v-if="post.location">{{ post.location }}</span>
        </div>
        <div class="grid gap-2">
          <h2 class="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            {{ post.title }}
          </h2>
          <p class="text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
            {{ post.description }}
          </p>
        </div>
      </article>
    </section>
  </main>
</template>
