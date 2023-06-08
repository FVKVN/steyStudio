import { DocumentIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
    name: 'pageSection',
    title: 'Hoofdstuk op de pagina',
    type: 'document',
    icon: DocumentIcon,
    fields: [
        defineField({
            name: 'title',
            description: 'Dit veld is de hoofdtitel het hoofdstuk',
            title: 'Titel',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subTitle',
            description: 'Dit veld is de subtitel het hoofdstuk',
            title: 'Subtitel [optioneel]',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'content',
            description: 'Dit veld bevat de body tekst van het hoofdstuk, gebruik dit voor grote stukken tekstuele inhoud.',
            title: 'Body tekst [optioneel]',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                        {title: 'H5', value: 'h5'},
                        {title: 'H6', value: 'h6'},
                        {title: 'Quote', value: 'blockquote'}
                    ],
                })
            ]
        }),
        defineField({
            name: 'workItems',
            title: 'Werk overzicht [Optioneel]',
            description: 'Hier kan je bepalen welke werktypes getoond moeten worden in het hoofdstuk',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{type: 'workItem'}],
                }),
            ],
        }),
        defineField({
            name: 'expoItems',
            title: 'Expo overzicht [Optioneel]',
            description: 'Hier kan je bepalen welke exposities, ingevuld onder expositie items getoond moeten worden in het hoofdstuk',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{type: 'expoItem'}],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                subtitle: 'Hoofdstuk',
                title,
            }
        },
    },
});
