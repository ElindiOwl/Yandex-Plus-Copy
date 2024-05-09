import { useEffect, useState } from 'react';

export const loadingTextPlaceHolder = (data) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(data.length === 0);
    }, [data]);

    return isLoading;
};
