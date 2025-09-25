export type Component<Props> = {
    (props: Props): React.ReactElement | null;
};

export type RefComponent<Props, Element> = React.ForwardRefExoticComponent<Props & React.RefAttributes<Element>>;

export type ClassnameTypes = Pick<React.HTMLAttributes<HTMLElement>, 'className'>;

export type ArrayStringTypes = string | string[];

export type BreakpointsTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
