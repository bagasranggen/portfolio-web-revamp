import React, { forwardRef } from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

export type LinkTypes = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps;

const Link = forwardRef<HTMLAnchorElement, LinkTypes>(({ children, ...rest }, ref) => {
    // const pathname = usePathname();

    // const hrefReplacer = (href: NextLinkProps['href']) => {
    //     let hrefUpdate: NextLinkProps['href'] = href;
    //     const replaceHref = process.env.NEXT_PUBLIC_LINK_REPLACE?.split(',');
    //     if (typeof href === 'string' && replaceHref && href.includes(replaceHref[0])) {
    //         hrefUpdate = href.replace(replaceHref[0], replaceHref[1]);
    //     }
    //
    //     return hrefUpdate;
    // };

    // const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //     const url = [`${window.location.origin}`, `${pathname}`].join('');
    //     let updatedHref = hrefReplacer(href);
    //     if ((updatedHref as string).slice(-1) === '/') {
    //         updatedHref = (updatedHref as string).slice(0, -1);
    //     }
    //
    //     // const isShortcutPressed = e.ctrlKey || e.shiftKey || e.metaKey;
    //     const isAnchorHref = String(href).startsWith('#');
    //
    //     if (isAnchorHref) {
    //         e.preventDefault();
    //         // scrollTo(href as string, 'data-anchor-offset' in rest ? (rest['data-anchor-offset'] as string) : undefined);
    //     }
    //
    //     // if (href !== pathname && href !== url && !isAnchorHref && rest.target !== '_blank' && !isShortcutPressed) {
    //     //     setPage((prev: PageLinkProps) => ({ ...prev, href, isTransitioning: true }));
    //     // }
    //
    //     // if (url === updatedHref) {
    //     //     e.preventDefault();
    //     //     setTimeout(() => stopProgress(), 80);
    //     // }
    //
    //     onClick && onClick(e);
    // };

    return (
        <NextLink
            ref={ref}
            {...rest}>
            {children}
        </NextLink>
    );
});

export default Link;
Link.displayName = 'Link';
