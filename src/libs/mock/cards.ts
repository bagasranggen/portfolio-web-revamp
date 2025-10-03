import { createArrayFromNumber, createPicsumImage } from '@/libs/factory';

import { BlockTypes, OffsetTypes } from '@/components/common/Cards';
import { OffsetItemDescriptionTypes } from '@/components/common/Cards/Offset/OffsetItemDescription';
import parse from 'html-react-parser';

export const CARDS_OFFSET: OffsetTypes['items'] = createArrayFromNumber(3).map((_, i) => {
    const description: OffsetItemDescriptionTypes[] = [
        {
            title: 'Description',
            children:
                parse(`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi debitis,eos expedita molestias neque recusandae. Aspernatur dolores illo ipsa molestias, nemo odio possimus quam quibusdam, sapiente, tenetur veritatis voluptatem!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperioresautem, consectetur.</p>`),
        },
    ];
    if (i % 2 === 0) {
        description.push({
            title: 'Tech',
            children: parse(`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`),
        });
    }

    return {
        count: `0${i + 1}`,
        description,
        media: [createPicsumImage({ id: 88, width: 1000, height: 750, hasRetina: true })],
        link: {
            href: `/portfolio/${i + 1}`,
        },
    };
});

export const CARDS_BLOCK: BlockTypes['items'] = createArrayFromNumber(5).map(() => {
    return {
        link: {
            href: '#',
        },
        title: 'Sooka Bakedgoods',
        description: parse(
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consectetur cumque dignissimos doloremque earum eligendi est eveniet fuga fugiat fugit labore nulla odio placeat, sapiente sit tenetur, voluptates voluptatum.</p>`
        ),
        media: [createPicsumImage({ id: 88, width: 650, height: 488, hasRetina: true })],
    };
});
