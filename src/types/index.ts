export interface About {
  title: string
  content: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any
}

export interface Project {
  _id: string
  title: string
  description: string
  imageUrl: string
  slug: { current: string }
  categories: string[]
  completionDate: string
}