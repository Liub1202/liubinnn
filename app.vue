<script setup lang="ts">
useHead({
  script: [
    {
      key: 'theme-init',
      innerHTML: `
        (() => {
          const storageKey = 'liubinnn-theme';
          const root = document.documentElement;
          const storedTheme = localStorage.getItem(storageKey);
          const fallbackTheme = new Date().getHours() >= 18 ? 'dark' : 'light';
          const theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : fallbackTheme;

          root.classList.toggle('dark', theme === 'dark');
          root.dataset.theme = theme;
          root.style.colorScheme = theme;
        })();
      `
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
