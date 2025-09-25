export const clearStyle = ({ target, style }: { target: HTMLElement; style: string[] }) => {
    if (!target || !style || style.length === 0) return;

    style.forEach((item) => {
        target.style[item] = '';
    });
};
