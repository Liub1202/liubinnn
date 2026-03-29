<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import type { PostTocItem } from '~/composables/usePostToc'

const props = defineProps<{
  items: PostTocItem[]
  activeId?: string
  translateY?: number
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()

const tocCardElement = ref<HTMLElement | null>(null)
const tocNavElement = ref<HTMLElement | null>(null)

const scrollActiveItemIntoView = async () => {
  await nextTick()

  const navElement = tocNavElement.value

  if (!navElement || !props.activeId) {
    return
  }

  const activeButton = Array.from(navElement.querySelectorAll<HTMLElement>('[data-toc-id]'))
    .find((element) => element.dataset.tocId === props.activeId)

  if (!activeButton) {
    return
  }

  const navRect = navElement.getBoundingClientRect()
  const itemRect = activeButton.getBoundingClientRect()
  const safePadding = 20
  const visibleTop = navRect.top + safePadding
  const visibleBottom = navRect.bottom - safePadding

  if (itemRect.top >= visibleTop && itemRect.bottom <= visibleBottom) {
    return
  }

  const targetScrollTop = activeButton.offsetTop - navElement.clientHeight * 0.35 + activeButton.offsetHeight * 0.5
  const nextScrollTop = Math.max(targetScrollTop, 0)

  navElement.scrollTo({
    top: nextScrollTop,
    behavior: 'smooth'
  })
}

const getIndentClass = (level: PostTocItem['level']) => {
  if (level === 1) {
    return ''
  }

  if (level === 2) {
    return 'pl-3'
  }

  return 'pl-6'
}

defineExpose({
  tocCardElement
})

watch(
  () => props.activeId,
  () => {
    scrollActiveItemIntoView()
  }
)

watch(
  () => props.items.length,
  () => {
    scrollActiveItemIntoView()
  }
)
</script>

<template>
  <aside
    v-if="props.items.length > 1"
    class="hidden lg:block"
  >
    <section
      ref="tocCardElement"
      class="rounded-[1.5rem] border border-neutral-200/85 bg-white/78 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-transform duration-300 ease-out dark:border-neutral-800/90 dark:bg-neutral-950/78 dark:shadow-[0_18px_42px_rgba(0,0,0,0.2)]"
      :style="{ transform: `translateY(${props.translateY ?? 0}px)` }"
    >
      <div class="mb-3 flex items-center justify-between px-1">
        <div>
          <p class="text-[10px] uppercase tracking-[0.22em] text-neutral-400 dark:text-neutral-500">
            On This Page
          </p>
          <h2 class="mt-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            目录
          </h2>
        </div>
      </div>

      <nav
        ref="tocNavElement"
        aria-label="文章目录"
        class="max-h-[calc((100vh-9rem)*0.85)] overflow-y-auto pr-1 toc-scroll"
      >
        <ol class="grid gap-0.5">
          <li
            v-for="item in props.items"
            :key="item.id"
            :class="getIndentClass(item.level)"
          >
            <button
              type="button"
              :data-toc-id="item.id"
              class="group relative flex w-full origin-left items-start rounded-xl px-2.5 py-1.5 text-left transition-all duration-200 ease-out hover:bg-neutral-50/90 hover:text-neutral-900 dark:hover:bg-neutral-900/90 dark:hover:text-neutral-50"
              :class="item.id === props.activeId
                ? 'scale-[1.01] bg-neutral-50/90 text-neutral-950 dark:bg-neutral-900/85 dark:text-neutral-50'
                : 'text-neutral-500 dark:text-neutral-400'"
              @click="emit('navigate', item.id)"
            >
              <span
                class="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-transparent transition-all duration-200"
                :class="item.id === props.activeId
                  ? 'bg-gradient-to-b from-cyan-400 via-sky-400 to-violet-500 opacity-100'
                  : 'opacity-0 group-hover:opacity-35 group-hover:bg-gradient-to-b group-hover:from-cyan-300 group-hover:to-violet-400'"
              />
              <span
                class="block text-[12px] leading-5 transition-colors duration-200"
                :class="item.id === props.activeId
                  ? 'font-medium'
                  : item.level === 1
                    ? 'font-medium text-neutral-700 dark:text-neutral-300'
                    : 'font-normal'"
              >
                {{ item.text }}
              </span>
            </button>
          </li>
        </ol>
      </nav>
    </section>
  </aside>
</template>
