import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Oklahoma Construction Company Improves M365 Security"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      description: 'Can be anonymized if needed, e.g., "Oklahoma Manufacturing Company"'
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Construction', value: 'construction' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Professional Services', value: 'professional-services' },
          { title: 'Retail', value: 'retail' },
          { title: 'Non-Profit', value: 'non-profit' },
          { title: 'Other', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'string',
      description: 'e.g., "15-25 employees"'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
      ]
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What problems was the client facing?'
    }),
    defineField({
      name: 'solution',
      title: 'Our Solution',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            }
          ]
        }
      ],
      description: 'What services did you provide? How did you solve it?'
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key outcomes (one per line)',
      validation: Rule => Rule.min(1).max(6)
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 3
        },
        {
          name: 'author',
          title: 'Author',
          type: 'string',
          description: 'e.g., "John Smith, CEO"'
        }
      ]
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'IT Assessment', value: 'systems-assessment' },
          { title: 'Microsoft 365 / Entra ID Setup', value: 'identity-device-foundation' },
          { title: 'M365 Governance', value: 'm365-governance' },
          { title: 'Backup & DR Readiness', value: 'backup-dr-readiness' },
          { title: 'IT Operations Toolkit', value: 'it-operations-toolkit' },
          { title: 'Process Documentation', value: 'process-clarity-pack' }
        ]
      }
    }),
    defineField({
      name: 'timeline',
      title: 'Project Timeline',
      type: 'string',
      description: 'e.g., "6 weeks", "2 months"'
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      industry: 'industry',
      media: 'featuredImage'
    },
    prepare({ title, client, industry, media }) {
      return {
        title: title,
        subtitle: `${client} • ${industry}`,
        media
      }
    }
  }
})
