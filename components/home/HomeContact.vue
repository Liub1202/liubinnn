<script setup lang="ts">
const links = [
  {
    label: 'GitHub',
    value: 'github.com/Liub1202',
    href: 'https://github.com/Liub1202',
    external: true
  },
  {
    label: '邮箱',
    value: '2115360251@qq.com',
    href: 'mailto:2115360251@qq.com',
    external: false
  }
]
</script>

<template>
  <HomeSection
    id="contact"
    eyebrow="联系"
    title="保留少量但真实可用的联系入口。"
    description="这里只放能够直接使用的方式，避免让联系区看起来像占位列表。"
  >
    <div class="grid gap-4 md:grid-cols-2">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noreferrer' : undefined"
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
