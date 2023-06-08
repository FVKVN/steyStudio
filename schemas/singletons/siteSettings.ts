import { CogIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';


export default defineType({
    name: 'settings',
    title: 'Instellingen',
    type: 'document',
    icon: CogIcon,
    fields: [
        defineField({
            name: 'heroImage',
            title: 'Hero afbeelding',
            description: 'Hero afbeelding bovenaan de pagina',
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
            name: 'heroTitle',
            title: 'Hero titel',
            description: 'De titel gebruikt in de hero component',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'scrollNavItems',
            title: 'Scroll navigatie links',
            description: 'Links in de navigatie die het makkelijker maken om naar bepaalde secties te navigeren op de pagina',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [
                        {type: 'pageSection'}
                    ],
                }),
            ]
        }),
        defineField({
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
            description: 'Getoond wanneer de site gedeeld wordt op sociale media of bij zoekmachine resultaten.',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Site instellingen',
            }
        },
    },
});
