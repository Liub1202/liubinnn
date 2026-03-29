import { computed, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

const clamp = (value: number, min: number, max: number) => {
  if (value < min) {
    return min
  }

  if (value > max) {
    return max
  }

  return value
}

export const usePostTocPosition = (
  articleLayoutRef: Ref<HTMLElement | null>,
  articleShellRef: Ref<HTMLElement | null>,
  tocColumnRef: Ref<HTMLElement | null>,
  tocCardRef: Ref<HTMLElement | null>,
  enabled: Ref<boolean>
) => {
  const translateY = ref(0)
  const progress = ref(0)
  const phase = ref<'top' | 'middle' | 'bottom'>('top')

  let ticking = false

  const measureAndUpdate = () => {
    ticking = false

    if (!import.meta.client || !enabled.value) {
      translateY.value = 0
      progress.value = 0
      phase.value = 'top'
      return
    }

    const layout = articleLayoutRef.value
    const articleShell = articleShellRef.value
    const tocColumn = tocColumnRef.value
    const tocCard = tocCardRef.value

    if (!layout || !articleShell || !tocColumn || !tocCard) {
      translateY.value = 0
      progress.value = 0
      phase.value = 'top'
      return
    }

    const viewportHeight = window.innerHeight
    const layoutRect = layout.getBoundingClientRect()
    const articleRect = articleShell.getBoundingClientRect()
    const tocHeight = tocCard.offsetHeight
    const columnHeight = tocColumn.offsetHeight

    const topLimit = 0
    const maxTravel = Math.max(columnHeight - tocHeight, 0)

    if (maxTravel <= 0) {
      translateY.value = 0
      progress.value = 0
      phase.value = 'top'
      return
    }

    const layoutTop = layoutRect.top + window.scrollY
    const articleHeight = articleRect.height
    const absoluteScrollY = window.scrollY

    const startScroll = Math.max(layoutTop + Math.min(viewportHeight * 0.38, 300), 0)
    const endScroll = Math.max(layoutTop + articleHeight - viewportHeight * 0.72, startScroll + 1)
    const rawProgress = clamp((absoluteScrollY - startScroll) / (endScroll - startScroll), 0, 1)

    const sizeFactor = clamp((viewportHeight - tocHeight) / Math.max(viewportHeight, 1), 0.18, 0.82)
    const travelFactor = clamp(sizeFactor + maxTravel / Math.max(columnHeight, 1) * 0.3, 0.28, 1)
    const effectiveTravel = maxTravel * travelFactor
    const middleTarget = clamp(viewportHeight * 0.34 - tocHeight * 0.5, 0, maxTravel)
    const centeredTravel = Math.min(effectiveTravel, Math.max(middleTarget, maxTravel * 0.38))

    let nextTranslateY = 0
    let nextPhase: 'top' | 'middle' | 'bottom' = 'top'

    if (rawProgress <= 0.2) {
      nextTranslateY = 0
      nextPhase = 'top'
    } else if (rawProgress < 0.8) {
      const localProgress = (rawProgress - 0.2) / 0.6
      const startY = 0
      const middleY = centeredTravel
      const drift = (maxTravel - middleY) * localProgress * 0.22
      nextTranslateY = startY + (middleY - startY) * Math.pow(localProgress, 1.18) + drift
      nextPhase = 'middle'
    } else {
      const localProgress = (rawProgress - 0.8) / 0.2
      const middleBase = centeredTravel + (maxTravel - centeredTravel) * 0.28
      nextTranslateY = middleBase + (maxTravel - middleBase) * Math.pow(localProgress, 1.08)
      nextPhase = 'bottom'
    }

    translateY.value = clamp(nextTranslateY, topLimit, maxTravel)
    progress.value = rawProgress
    phase.value = nextPhase
  }

  const requestMeasure = () => {
    if (!import.meta.client) {
      return
    }

    if (ticking) {
      return
    }

    ticking = true
    window.requestAnimationFrame(measureAndUpdate)
  }

  onMounted(() => {
    if (!import.meta.client) {
      return
    }

    requestMeasure()
    window.addEventListener('scroll', requestMeasure, { passive: true })
    window.addEventListener('resize', requestMeasure)
  })

  onBeforeUnmount(() => {
    if (!import.meta.client) {
      return
    }

    window.removeEventListener('scroll', requestMeasure)
    window.removeEventListener('resize', requestMeasure)
  })

  return {
    translateY: computed(() => translateY.value),
    progress: computed(() => progress.value),
    phase: computed(() => phase.value),
    refreshTocPosition: requestMeasure
  }
}
