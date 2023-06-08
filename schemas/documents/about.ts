import { ComponentIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
    name: 'about',
    title: 'Over Firmin | pagina sectie',
    type: 'document',
    icon: ComponentIcon,
    fields: [
        defineField({
            name: 'title',
            description: 'Dit veld is de hoofdtitel van de over firmin pagina sectie',
            title: 'Titel',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subTitle',
            description: 'Dit veld is de subtitel van de over firmin pagina sectie',
            title: 'Subtitel',
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
            description: 'Dit veld bevat de inhoud van de over firmin pagina sectie',
            title: 'Inhoud',
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
        })
    ]
});
