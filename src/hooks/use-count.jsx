import { useCallback, useState } from 'react';

export const useCount = (initialValue = 0, min = 0, max = 5) => {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount((currentCount) => (currentCount < max ? currentCount + 1 : currentCount));
    }, []);

    const decrement = useCallback(() => {
        setCount((currentCount) => (currentCount > min ? currentCount - 1 : currentCount));
    }, []);

    return { increment, decrement, count };
};
