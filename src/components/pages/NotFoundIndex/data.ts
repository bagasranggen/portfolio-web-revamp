import { PageDataProps, PageDataReturnProps } from '@/libs/@types';

import { NotFoundIndexProps } from '@/components/pages/NotFoundIndex';
import { LayoutProps } from '@/components/layout/Layout';

export const NotFoundData = async ({
    className,
}: PageDataProps<Pick<LayoutProps, 'className'>>): PageDataReturnProps<NotFoundIndexProps> => {
    return {
        entries: {
            layout: { className },
        },
    };
};
