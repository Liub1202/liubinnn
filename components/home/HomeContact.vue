<script setup lang="ts">
const links = [
  {
    label: 'GitHub',
    value: 'github.com/Liub1202',
    href: 'https://github.com/Liub1202'
  },
  {
    label: 'Email',
    value: 'hello@liubinnn.dev',
    href: 'mailto:hello@liubinnn.dev'
  },
  {
    label: 'Blog',
    value: 'Writing and notes',
    href: '#recent-posts'
  }
]
</script>

<template>
  <HomeSection
    id="contact"
    eyebrow="Contact"
    title="Simple ways to reach out or keep reading."
    description="The contact block stays lightweight and link-driven, matching the minimal direction of the site."
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
