import { DocumentsIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'workItem',
    title: 'Werk types',
    type: 'document',
    icon: DocumentsIcon,
    fields: [
        defineField({
            name: 'type',
            description: 'Dit veld duid het type van werk aan',
            title: 'Type',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            description: 'Dit veld dient om het type te omschrijven',
            title: 'Omschrijving',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'type',
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'cover',
            title: 'Cover afbeelding',
            description: 'Wordt gebruikt wanneer er gelinkt wordt naar het type, bijvoorbeeld op het werk overzicht',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternatieve text (gebruikt door screenreaders)',
                })
            ]
        }),
        defineField({
            name: 'images',
            title: 'Afbeeldingen van het type',
            type: 'gallery',
        })
    ]
});
