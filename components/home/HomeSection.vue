<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
  id?: string
}>()
</script>

<template>
  <section :id="id" class="grid gap-6">
    <div class="grid gap-3">
      <p
        v-if="eyebrow"
        class="text-xs font-medium uppercase tracking-[0.28em] text-neutral-400 dark:text-neutral-500"
      >
        {{ eyebrow }}
      </p>
      <div class="grid gap-2">
        <h2 class="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-3xl">
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base"
        >
          {{ description }}
        </p>
      </div>
    </div>

    <slot />
  </section>
</template>
