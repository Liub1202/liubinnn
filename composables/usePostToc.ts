import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch, type Ref } from 'vue'

type TocLevel = 1 | 2 | 3

export type PostTocItem = {
  id: string
  text: string
  level: TocLevel
}

const slugifyHeading = (value: string): string => value
  .toLowerCase()
  .trim()
  .replace(/[`~!@#$%^&*()_=+[{\]}\\|;:'",.<>/?]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')

const extractLevel = (tagName: string): TocLevel => {
  if (tagName === 'H1') {
    return 1
  }

  if (tagName === 'H2') {
    return 2
  }

  return 3
}

export const usePostToc = (articleRef: Ref<HTMLElement | null>) => {
  const tocItems = ref<PostTocItem[]>([])
  const activeId = ref('')
  const isReady = ref(false)

  let observer: IntersectionObserver | null = null
  let mutationObserver: MutationObserver | null = null
  let observedHeadings: HTMLElement[] = []

  const cleanupObserver = () => {
    observer?.disconnect()
    observer = null
    mutationObserver?.disconnect()
    mutationObserver = null
    observedHeadings = []
  }

  const evaluateActiveHeading = () => {
    if (observedHeadings.length === 0) {
      activeId.value = ''
      return
    }

    const currentHeading = [...observedHeadings]
      .reverse()
      .find((heading) => heading.getBoundingClientRect().top <= 140)

    activeId.value = currentHeading?.id ?? observedHeadings[0]?.id ?? ''
  }

  const assignHeadingIds = (headings: HTMLElement[]) => {
    const usedIds = new Set<string>()

    headings.forEach((heading, index) => {
      const fallbackId = `section-${index + 1}`
      const baseId = heading.id || slugifyHeading(heading.textContent || '') || fallbackId
      let nextId = baseId
      let suffix = 1

      while (usedIds.has(nextId)) {
        suffix += 1
        nextId = `${baseId}-${suffix}`
      }

      heading.id = nextId
      usedIds.add(nextId)
    })
  }

  const buildToc = async () => {
    await nextTick()

    const article = articleRef.value

    if (!article) {
      tocItems.value = []
      activeId.value = ''
      isReady.value = true
      cleanupObserver()
      return
    }

    const headings = Array.from(article.querySelectorAll<HTMLElement>('h1, h2, h3'))
      .filter((heading) => (heading.textContent || '').trim().length > 0)

    assignHeadingIds(headings)

    tocItems.value = headings.map((heading) => ({
      id: heading.id,
      text: (heading.textContent || '').trim(),
      level: extractLevel(heading.tagName)
    }))

    cleanupObserver()
    observedHeadings = headings

    if (headings.length > 0 && import.meta.client) {
      observer = new IntersectionObserver(
        () => {
          evaluateActiveHeading()
        },
        {
          rootMargin: '-96px 0px -65% 0px',
          threshold: [0, 1]
        }
      )

      headings.forEach((heading) => observer?.observe(heading))
      evaluateActiveHeading()

      if (window.location.hash) {
        const hashId = decodeURIComponent(window.location.hash.slice(1))
        const targetHeading = headings.find((heading) => heading.id === hashId)

        if (targetHeading) {
          requestAnimationFrame(() => {
            targetHeading.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          })
        }
      }
    } else {
      activeId.value = ''
    }

    if (import.meta.client && article && !mutationObserver) {
      mutationObserver = new MutationObserver(() => {
        buildToc()
      })

      mutationObserver.observe(article, {
        childList: true,
        subtree: true
      })
    }

    isReady.value = true
  }

  const scrollToHeading = (id: string) => {
    if (!import.meta.client) {
      return
    }

    const targetHeading = observedHeadings.find((heading) => heading.id === id)

    if (!targetHeading) {
      return
    }

    activeId.value = id
    history.replaceState(null, '', `#${encodeURIComponent(id)}`)
    targetHeading.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  watch(articleRef, () => {
    buildToc()
  })

  onMounted(() => {
    buildToc()
  })

  onBeforeUnmount(() => {
    cleanupObserver()
  })

  return {
    tocItems: computed(() => tocItems.value),
    activeId: computed(() => activeId.value),
    hasToc: computed(() => tocItems.value.length > 1),
    isReady: computed(() => isReady.value),
    scrollToHeading
  }
}
