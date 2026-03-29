export type BlogPostSummary = {
  path: string
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  draft: boolean
  readingTime?: string
  location?: string
}

export type BlogPostDetail = BlogPostSummary & {
  body: unknown
}

export type AdjacentPosts = {
  previous: BlogPostSummary | null
  next: BlogPostSummary | null
}

type RawPost = {
  path: string
  title: string
  description: string
  date: string
  tags?: string[]
  draft?: boolean
  readingTime?: string
  location?: string
  body?: unknown
}

const normalizeTag = (tag: string): string => tag.trim().toLowerCase()

export const getTagPath = (tag: string): string => `/tags/${encodeURIComponent(tag)}`

const comparePostByDateAsc = (left: BlogPostSummary, right: BlogPostSummary): number => {
  const dateDiff = new Date(left.date).getTime() - new Date(right.date).getTime()

  if (dateDiff !== 0) {
    return dateDiff
  }

  return left.path.localeCompare(right.path)
}

const normalizePost = (post: RawPost): BlogPostSummary => {
  const slug = post.path.replace(/^\/posts\//, '').replace(/^\/blog\//, '')

  return {
    path: `/blog/${slug}`,
    slug,
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags ?? [],
    draft: post.draft ?? false,
    readingTime: post.readingTime,
    location: post.location
  }
}

export const usePublishedPosts = async (): Promise<BlogPostSummary[]> => {
  const posts = await queryCollection('posts')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()

  return posts.map((post) => normalizePost(post as RawPost))
}

export const useLatestPosts = async (limit = 3): Promise<BlogPostSummary[]> => {
  const posts = await usePublishedPosts()
  return posts.slice(0, limit)
}

export const usePostsByTag = async (tag: string): Promise<BlogPostSummary[]> => {
  const normalizedTag = normalizeTag(tag)
  const posts = await usePublishedPosts()

  return posts.filter((post) =>
    post.tags.some((postTag) => normalizeTag(postTag) === normalizedTag)
  )
}

export const usePostBySlug = async (slug: string): Promise<BlogPostSummary | null> => {
  const posts = await usePublishedPosts()
  return posts.find((post) => post.slug === slug) ?? null
}

export const usePostDetailBySlug = async (slug: string): Promise<BlogPostDetail | null> => {
  const post = await queryCollection('posts')
    .where('path', '=', `/posts/${slug}`)
    .where('draft', '=', false)
    .first()

  if (!post) {
    return null
  }

  const normalized = normalizePost(post as RawPost)

  return {
    ...normalized,
    body: (post as RawPost).body
  }
}

export const useAdjacentPostsBySlug = async (slug: string): Promise<AdjacentPosts> => {
  const posts = await usePublishedPosts()
  const orderedPosts = [...posts].sort(comparePostByDateAsc)
  const currentIndex = orderedPosts.findIndex((post) => post.slug === slug)

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null
    }
  }

  return {
    previous: orderedPosts[currentIndex - 1] ?? null,
    next: orderedPosts[currentIndex + 1] ?? null
  }
}
