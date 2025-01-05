import {defineArrayMember, defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: "Page d'accueil",
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        {type: 'string', name: 'title'},
        {type: 'text', name: 'introduction'},
        {
          type: 'object',
          name: 'button',
          fields: [
            {type: 'string', name: 'title'},
            {type: 'string', name: 'link'},
          ],
        },
        {type: 'image', name: 'image'},
      ],
    }),
    defineField({
      name: 'functionalities',
      type: 'object',
      fields: [
        {type: 'string', name: 'title'},
        {type: 'text', name: 'text'},
        {
          name: 'elements',
          type: 'array',
          title: 'Eléments des fonctionnalités',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'element',
              fields: [
                {type: 'image', name: 'image'},
                {type: 'string', name: 'title'},
                {type: 'string', name: 'subtitle'},
                {type: 'text', name: 'text'},
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'quote',
      type: 'text',
    }),
    defineField({
      name: 'testimonies',
      title: 'Testimonies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimony'}]}],
    }),
  ],
})
