<template>
  <HomeSection
    id="about"
    eyebrow="About"
    title="A homepage first, with writing as a structured second layer."
    description="The landing page should explain the person behind the site before sending visitors deeper into blog content."
  >
    <div class="grid gap-6 rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800 sm:grid-cols-[1.4fr_0.8fr] sm:p-8">
      <div class="grid gap-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
        <p>
          This project is intentionally shaped as a personal site rather than a content platform. The homepage
          highlights identity, focus, and writing direction, while the blog stays as a clear entry point instead
          of dominating the whole experience.
        </p>
        <p>
          The result should feel like a quiet developer profile: readable, spacious, and easy to extend later
          into richer modules without breaking the simplicity of the first version.
        </p>
      </div>

      <div class="grid gap-4 rounded-2xl bg-neutral-50 p-5 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
        <div class="grid gap-1">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            Focus
          </p>
          <p>Personal identity, writing, and a clear blog entrance.</p>
        </div>
        <div class="grid gap-1">
          <p class="text-xs uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500">
            Principle
          </p>
          <p>Keep the homepage concise, then let content deepen the visit.</p>
        </div>
      </div>
    </div>
  </HomeSection>
</template>
