import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
    name: 'gallery',
    type: 'object',
    title: 'Afbeeldingen gallerij',
    fields: [
        defineField({
            name: 'images',
            type: 'array',
            title: 'Afbeeldingen',
            of: [
                defineArrayMember({
                    name: 'image',
                    type: 'image',
                    title: 'Afbeelding',
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
                })
            ],
            options: {
                layout: 'grid',
            },
        }),
    ],
    preview: {
        select: {
            images: 'images',
            image: 'images.0',
        },
        prepare(selection) {
            const { images, image } = selection;

            return {
                title: `Gallerij block van ${Object.keys(images).length} afbeeldingen`,
                subtitle: `Alt text: ${image.alt}`,
                media: image,
            };
        },
    },
});
