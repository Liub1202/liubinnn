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

const normalizePost = (post: RawPost): BlogPostSummary => ({
  path: post.path,
  slug: post.path.replace(/^\/posts\//, '').replace(/^\/blog\//, ''),
  title: post.title,
  description: post.description,
  date: post.date,
  tags: post.tags ?? [],
  draft: post.draft ?? false,
  readingTime: post.readingTime,
  location: post.location
})

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
