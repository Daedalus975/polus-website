import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gzb97594'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Sanity client for fetching data
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Enable CDN for production
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Reusable query functions
export async function getBlogPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      featuredImage,
      categories
    }`
  )
}

export async function getBlogPost(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      featuredImage,
      categories,
      body,
      seo
    }`,
    { slug }
  )
}

export async function getCaseStudies() {
  return client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      client,
      industry,
      teamSize,
      publishedAt,
      featuredImage,
      services,
      timeline
    }`
  )
}

export async function getCaseStudy(slug: string) {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      industry,
      teamSize,
      publishedAt,
      featuredImage,
      challenge,
      solution,
      results,
      testimonial,
      services,
      timeline,
      seo
    }`,
    { slug }
  )
}
