import { DocumentsIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
    name: 'expoItem',
    title: 'Exposities',
    type: 'document',
    icon: DocumentsIcon,
    fields: [
        defineField({
            name: 'title',
            description: 'Dit veld duid de naam van de expositie aan',
            title: 'Titel',
            type: 'string',
        }),
        defineField({
            name: 'location',
            description: 'Dit veld duid de locatie van de expositie aan',
            title: 'Locatie',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'dateFrom',
            title: 'Startdatum',
            type: 'date',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'dateTo',
            title: 'Einddatum',
            type: 'date',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: (doc, context) => `${doc.location}-${doc.dateFrom}`,
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Afbeeldingen van de expositie',
            type: 'gallery',
        }),
        defineField({
            name: 'description',
            description: 'Dit veld bevat de omschrijving van de expositie',
            title: 'Omschrijving',
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
    ],
    preview: {
        select: {
            title: 'title',
            location: 'location',
            date: 'dateFrom',
        },
        prepare ({ title = 'No title', location, date }) {
            return {
                title,
                subtitle: location
                ? new Date(date).toLocaleDateString()
                : 'Missing date'
            }
        }
    }
});
