<script setup lang="ts">
const stackGroups = [
  {
    title: 'Core Stack',
    items: ['Nuxt', 'TypeScript', '@nuxt/content', 'Tailwind CSS']
  },
  {
    title: 'Site Direction',
    items: ['Personal Homepage', 'Blog', 'Readable UI', 'Content-first structure']
  }
]
</script>

<template>
  <HomeSection
    eyebrow="Stack"
    title="Tools and themes that define the site."
    description="This section gives visitors a quick technical snapshot without turning the homepage into a long project document."
  >
    <div class="grid gap-4 md:grid-cols-2">
      <section
        v-for="group in stackGroups"
        :key="group.title"
        class="grid gap-4 rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800"
      >
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {{ group.title }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in group.items"
            :key="item"
            class="rounded-full bg-neutral-100 px-3 py-2 text-sm text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
          >
            {{ item }}
          </span>
        </div>
      </section>
    </div>
  </HomeSection>
</template>
