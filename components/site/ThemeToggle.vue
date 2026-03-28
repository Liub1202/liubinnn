<script setup lang="ts">
const { isDark, ready, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-2 text-sm text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-100 dark:hover:text-neutral-50"
    :aria-label="isDark ? '切换到浅色主题' : '切换到深色主题'"
    @click="toggleTheme"
  >
    <span
      class="h-2.5 w-2.5 rounded-full transition"
      :class="isDark ? 'bg-neutral-100' : 'bg-neutral-900'"
    />
    <span>{{ ready ? (isDark ? '深色' : '浅色') : '主题' }}</span>
  </button>
</template>
