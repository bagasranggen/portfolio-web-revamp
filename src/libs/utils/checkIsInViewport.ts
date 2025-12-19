export const checkIsInViewport = ({ target }: { target: HTMLElement | null }) => {
    let fullInViewport = false;
    let partialInViewport = false;

    if (target) {
        const rect = target.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        partialInViewport =
            (rect.top >= 0 || rect.top + rect.height >= 0) &&
            rect.top <= windowHeight &&
            (rect.left >= 0 || rect.left + rect.width >= 0) &&
            rect.left <= windowWidth;

        fullInViewport =
            rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
    }

    return {
        fullInViewport,
        partialInViewport,
    };
};
