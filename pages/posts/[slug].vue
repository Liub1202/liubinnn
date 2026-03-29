<script setup lang="ts">
import { navigateTo, useRoute } from '#imports'

const route = useRoute()
const slug = route.params.slug as string

await navigateTo(`/blog/${slug}`, {
  redirectCode: 301
})
</script>
