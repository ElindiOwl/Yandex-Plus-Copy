import { useSwiper } from 'swiper/react';
import { useEffect, useState } from 'react';

export const useSwiperState = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (swiper) {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);

            const onSlideChange = () => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
            };

            swiper.on('slideChange', onSlideChange);

            return () => {
                swiper.off('slideChange', onSlideChange);
            };
        }
    }, [swiper]);

    return { swiper, state: { isBeginning, isEnd } };
};