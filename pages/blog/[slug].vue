<script setup lang="ts">
import { createError, useHead, useRoute } from '#imports'
import { computed, nextTick, ref, watch } from 'vue'
import PostToc from '~/components/blog/PostToc.vue'
import { getTagPath } from '~/composables/usePosts'

const route = useRoute()
const slug = route.params.slug as string
const articleRef = ref<HTMLElement | null>(null)
const articleLayoutRef = ref<HTMLElement | null>(null)
const articleShellRef = ref<HTMLElement | null>(null)
const tocColumnRef = ref<HTMLElement | null>(null)
const tocCardRef = ref<InstanceType<typeof PostToc> | null>(null)

const post = await usePostDetailBySlug(slug)
const adjacentPosts = await useAdjacentPostsBySlug(slug)
const { tocItems, activeId, hasToc, scrollToHeading } = usePostToc(articleRef)
const { translateY, refreshTocPosition } = usePostTocPosition(
  articleLayoutRef,
  articleShellRef,
  tocColumnRef,
  computed(() => tocCardRef.value?.tocCardElement ?? null),
  hasToc
)

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: '文章不存在'
  })
}

useHead({
  title: post.title,
  meta: [
    {
      name: 'description',
      content: post.description
    }
  ]
})

watch(
  () => [hasToc.value, tocItems.value.length],
  async () => {
    await nextTick()
    refreshTocPosition()
  },
  { immediate: true }
)
</script>

<template>
  <main class="mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-6 py-16 sm:gap-14">
    <section class="grid gap-6 border-b border-neutral-200 pb-10 dark:border-neutral-800">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        <span aria-hidden="true">←</span>
        <span>返回博客列表</span>
      </NuxtLink>

      <div
        class="mx-auto grid w-full max-w-[56rem] gap-5"
        :class="hasToc ? 'lg:max-w-[68rem]' : ''"
      >
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
          <span>{{ post.date }}</span>
          <span v-if="post.readingTime">{{ post.readingTime }}</span>
          <span v-if="post.location">{{ post.location }}</span>
        </div>

        <div class="grid gap-3">
          <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
            {{ post.title }}
          </h1>
          <p class="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
            {{ post.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <NuxtLink
            v-for="tag in post.tags"
            :key="tag"
            :to="getTagPath(tag)"
            class="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600 transition hover:border-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
          >
            {{ tag }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      ref="articleLayoutRef"
      class="article-layout mx-auto w-full"
      :class="hasToc ? 'with-toc' : ''"
    >
      <section ref="articleShellRef" class="article-shell w-full rounded-[2rem] border border-neutral-200/90 bg-white/90 px-6 py-8 dark:border-neutral-800 dark:bg-neutral-950/90 sm:px-10 sm:py-10">
        <article ref="articleRef" class="post-body mx-auto w-full max-w-[48rem]">
          <ContentRenderer :value="post" />
        </article>
      </section>

      <div
        v-if="hasToc"
        ref="tocColumnRef"
        class="toc-column hidden lg:block"
      >
        <PostToc
          ref="tocCardRef"
          :items="tocItems"
          :active-id="activeId"
          :translate-y="translateY"
          @navigate="scrollToHeading"
        />
      </div>
    </section>

    <section
      class="article-layout mx-auto w-full items-start border-t border-neutral-200 pt-10 dark:border-neutral-800"
      :class="hasToc ? 'with-toc' : 'max-w-[56rem]'"
    >
      <section
        class="grid gap-4 sm:grid-cols-2"
        :class="hasToc ? 'lg:col-span-2' : ''"
      >
        <NuxtLink
          v-if="adjacentPosts.previous"
          :to="adjacentPosts.previous.path"
          class="grid gap-3 rounded-3xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950"
        >
          <span class="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
            上一篇
          </span>
          <h2 class="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            {{ adjacentPosts.previous.title }}
          </h2>
          <p class="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            {{ adjacentPosts.previous.date }}
          </p>
        </NuxtLink>

        <section
          v-else
          class="grid gap-3 rounded-3xl border border-dashed border-neutral-200 bg-neutral-50/70 p-5 text-left dark:border-neutral-800 dark:bg-neutral-950/60"
        >
          <span class="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
            上一篇
          </span>
          <h2 class="text-lg font-semibold tracking-tight text-neutral-700 dark:text-neutral-200">
            已经到最早的一篇了
          </h2>
          <p class="text-sm leading-7 text-neutral-500 dark:text-neutral-400">
            可以回到博客列表，继续浏览其他内容。
          </p>
        </section>

        <NuxtLink
          v-if="adjacentPosts.next"
          :to="adjacentPosts.next.path"
          class="grid gap-3 rounded-3xl border border-neutral-200 bg-white p-5 text-left transition hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:focus-visible:ring-neutral-500 dark:focus-visible:ring-offset-neutral-950 sm:text-right"
        >
          <span class="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
            下一篇
          </span>
          <h2 class="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            {{ adjacentPosts.next.title }}
          </h2>
          <p class="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            {{ adjacentPosts.next.date }}
          </p>
        </NuxtLink>

        <section
          v-else
          class="grid gap-3 rounded-3xl border border-dashed border-neutral-200 bg-neutral-50/70 p-5 text-left dark:border-neutral-800 dark:bg-neutral-950/60 sm:text-right"
        >
          <span class="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
            下一篇
          </span>
          <h2 class="text-lg font-semibold tracking-tight text-neutral-700 dark:text-neutral-200">
            这已经是最新的一篇
          </h2>
          <p class="text-sm leading-7 text-neutral-500 dark:text-neutral-400">
            后续更新会继续接在这里。
          </p>
        </section>
      </section>
    </section>
  </main>
</template>

<style scoped>
.article-layout {
  max-width: 56rem;
}

.post-body {
  color: rgb(64 64 64);
  font-size: 1.0625rem;
  line-height: 1.92;
}

.article-shell {
  box-shadow: 0 1px 0 rgba(10, 10, 10, 0.03);
}

.dark .post-body {
  color: rgb(214 214 214);
}

.dark .article-shell {
  box-shadow: none;
}

.toc-column {
  align-self: start;
}

.post-body :deep(h1),
.post-body :deep(h2),
.post-body :deep(h3),
.post-body :deep(h4) {
  color: rgb(10 10 10);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.22;
}

.dark .post-body :deep(h1),
.dark .post-body :deep(h2),
.dark .post-body :deep(h3),
.dark .post-body :deep(h4) {
  color: rgb(250 250 250);
}

.post-body :deep(h1) {
  font-size: 2.15rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  scroll-margin-top: 7rem;
}

.post-body :deep(h2) {
  font-size: 1.65rem;
  margin-top: 4rem;
  margin-bottom: 1.35rem;
  padding-top: 0.35rem;
  scroll-margin-top: 7rem;
}

.post-body :deep(h3) {
  font-size: 1.3rem;
  margin-top: 2.75rem;
  margin-bottom: 0.95rem;
  scroll-margin-top: 7rem;
}

.post-body :deep(h4) {
  font-size: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.post-body :deep(p),
.post-body :deep(ul),
.post-body :deep(ol),
.post-body :deep(blockquote) {
  margin-top: 1.15rem;
  margin-bottom: 1.15rem;
}

.post-body :deep(p + p) {
  margin-top: 1.35rem;
}

.post-body :deep(strong) {
  color: rgb(23 23 23);
  font-weight: 600;
}

.dark .post-body :deep(strong) {
  color: rgb(245 245 245);
}

.post-body :deep(ul),
.post-body :deep(ol) {
  padding-left: 1.5rem;
}

.post-body :deep(li) {
  margin-top: 0.6rem;
  padding-left: 0.2rem;
}

.post-body :deep(li > ul),
.post-body :deep(li > ol) {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.post-body :deep(ul li::marker),
.post-body :deep(ol li::marker) {
  color: rgb(163 163 163);
}

.post-body :deep(a) {
  text-decoration: underline;
  text-decoration-color: rgb(212 212 212);
  text-underline-offset: 0.22em;
  text-decoration-thickness: 0.08em;
}

.dark .post-body :deep(a) {
  text-decoration-color: rgb(82 82 82);
}

.post-body :deep(code) {
  border: 1px solid rgb(229 229 229);
  border-radius: 0.5rem;
  background: rgb(250 250 250);
  padding: 0.16rem 0.42rem;
  font-size: 0.9em;
  color: rgb(38 38 38);
}

.dark .post-body :deep(code) {
  border-color: rgb(64 64 64);
  background: rgb(32 32 32);
  color: rgb(240 240 240);
}

.post-body :deep(pre) {
  overflow-x: auto;
  border: 1px solid rgb(229 229 229);
  border-radius: 1.1rem;
  background: rgb(250 250 250);
  color: rgb(23 23 23);
  padding: 1.15rem 1.2rem;
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
  line-height: 1.75;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
}

.dark .post-body :deep(pre) {
  border-color: rgb(52 52 52);
  background: rgb(15 15 15);
  color: rgb(245 245 245);
  box-shadow: none;
}

.post-body :deep(pre code) {
  background: transparent;
  border: none;
  padding: 0;
  color: inherit;
  font-size: 0.92em;
}

.post-body :deep(blockquote) {
  border-left: 3px solid rgb(212 212 212);
  padding-left: 1.1rem;
  color: rgb(115 115 115);
  font-size: 1rem;
  margin-left: 0;
}

.dark .post-body :deep(blockquote) {
  border-left-color: rgb(82 82 82);
  color: rgb(163 163 163);
}

.post-body :deep(hr) {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  border: 0;
  border-top: 1px solid rgb(229 229 229);
}

.dark .post-body :deep(hr) {
  border-top-color: rgb(38 38 38);
}

.post-body :deep(img) {
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 1.8rem auto;
  border: 1px solid rgb(229 229 229);
  border-radius: 1.25rem;
}

.dark .post-body :deep(img) {
  border-color: rgb(52 52 52);
}

@media (min-width: 1024px) {
  .article-layout.with-toc {
    max-width: 78rem;
    display: grid;
    grid-template-columns: minmax(0, 56rem) 17.5rem;
    gap: 2rem;
    align-items: start;
  }

  .toc-column {
    position: sticky;
    top: 6.5rem;
  }
}

@media (min-width: 1280px) {
  .article-layout.with-toc {
    grid-template-columns: minmax(0, 56rem) 18.5rem;
  }
}

@media (max-width: 640px) {
  .post-body {
    font-size: 1rem;
    line-height: 1.88;
  }

  .post-body :deep(h1) {
    font-size: 1.9rem;
  }

  .post-body :deep(h2) {
    font-size: 1.5rem;
    margin-top: 3.25rem;
  }

  .post-body :deep(pre) {
    padding: 1rem;
  }
}
</style>
