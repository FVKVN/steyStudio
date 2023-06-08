import { ComponentIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
    name: 'work',
    title: 'Werk | pagina sectie',
    type: 'document',
    icon: ComponentIcon,
    fields: [
        defineField({
            name: 'title',
            description: 'Dit veld is de hoofdtitel van de werk pagina sectie',
            title: 'Titel',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subTitle',
            description: 'Dit veld is de subtitel van de werk pagina sectie',
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
            name: 'workItems',
            title: 'Werk categoriëen',
            description: 'Alle categoriëen van werk',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{type: 'workItem'}],
                }),
            ],
        }),
    ]
});
