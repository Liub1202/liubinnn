<script setup lang="ts">
const links = [
  {
    label: 'GitHub',
    value: 'github.com/Liub1202',
    href: 'https://github.com/Liub1202'
  },
  {
    label: '邮箱',
    value: '2115360251@qq.com',
    href: 'mailto:2115360251@qq.com'
  },
  {
    label: '博客',
    value: '文章与笔记',
    href: '#recent-posts'
  }
]
</script>

<template>
  <HomeSection
    id="contact"
    eyebrow="联系"
    title="一些简单直接的联系与继续阅读方式。"
    description="这个区块保持轻量、以链接为主，也延续整站克制简洁的方向。"
  >
    <div class="grid gap-4 md:grid-cols-3">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        class="grid gap-2 rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
      >
        <span class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
          {{ link.label }}
        </span>
        <span class="text-base font-medium text-neutral-900 dark:text-neutral-50">
          {{ link.value }}
        </span>
      </a>
    </div>
  </HomeSection>
</template>
