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
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        {type: 'string', name: 'title'},
        {type: 'string', name: 'text'},
        {
          name: 'stats',
          type: 'array',
          title: 'stats for hero',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'stat',
              fields: [
                {type: 'string', name: 'value'},
                {type: 'string', name: 'text'},
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
