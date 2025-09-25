export type CreatePicsumImageTypes = {
    id?: string;
    width?: number;
    height?: number;
    hasRetina?: boolean;
};

export const createPicsumImage = ({ id = '237', width, height, hasRetina }: CreatePicsumImageTypes) => {
    let dimension = { width, height };
    if (hasRetina && width && height) dimension = { width: width * 2, height: height * 2 };

    let srcRetina = undefined;
    if (hasRetina) srcRetina = `https://picsum.photos/id/${id}/${dimension?.width}/${dimension?.height}`;

    return {
        src: `https://picsum.photos/id/${id}/${width}/${height}`,
        srcRetina,
        alt: `${width}x${height}`,
        ...dimension,
    };
};
