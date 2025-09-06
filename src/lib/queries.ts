export const aboutQuery = `*[_type == "about"][0]{
  title,
  content,
  image
}`

export const projectsQuery = `*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  slug,
  categories,
  completionDate
}`