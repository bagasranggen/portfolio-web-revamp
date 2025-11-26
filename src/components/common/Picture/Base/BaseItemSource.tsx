import { BaseItemProps } from '@/components/common/Picture/Base/index';

const BaseItemSource = (item: BaseItemProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { media, className, src, srcRetina, alt, ...restImage } = item;

    let srcSet = src;
    if (srcRetina) srcSet += ` 1x, ${srcRetina} 2x`;

    const props = {
        srcSet,
        ...restImage,
        ...(media ? { media: `(min-width: ${media}px)` } : {}),
    };

    return <source {...(props as any)} />;
};

export default BaseItemSource;
