import { useEffect } from 'react';

export type KeyboardEventsProps = Partial<Record<'onKeyUp' | 'onKeyDown', (e: KeyboardEvent) => void>>;

export const KeyboardEvents = ({ onKeyUp, onKeyDown }: KeyboardEventsProps) => {
    useEffect(() => {
        const onKeyUpHandler = (e: KeyboardEvent) => {
            if (onKeyUp) onKeyUp(e);
        };

        const onKeyDownHandler = (e: KeyboardEvent) => {
            if (onKeyDown) onKeyDown(e);
        };

        document.addEventListener('keydown', onKeyDownHandler);
        document.addEventListener('keyup', onKeyUpHandler);

        return () => {
            document.removeEventListener('keydown', onKeyDownHandler);
            document.removeEventListener('keyup', onKeyUpHandler);
        };
    }, []);

    return null;
};
