import {defineField, defineType} from 'sanity'

export const testimonyType = defineType({
  name: 'testimony',
  title: 'Testimony',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'work',
      type: 'string',
    }),
    defineField({
      name: 'profilePicture',
      type: 'image',
    }),
    defineField({
      name: 'text',
      type: 'text',
    }),
  ],
})
