import { ComponentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'contact',
    title: 'Contact | pagina sectie',
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
        })
    ]
});
