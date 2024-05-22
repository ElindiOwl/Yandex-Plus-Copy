import { useEffect, useState } from 'react';

export const useLoading = <T, >(data: T[]) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(data.length === 0);
    }, [data]);

    return isLoading;
};
