import cn from 'classnames';
import style from './Slider-Buttons.module.scss';
import { useSwiperState } from 'src/Shared/lib/Slider/use-Swiper-State.ts';


export const SliderButtons = () => {
    const { swiper, state: { isBeginning, isEnd } } = useSwiperState();

    const prevSlideHandler = () => {
        swiper.slidePrev();
    };

    const nextSlideHandler = () => {
        swiper.slideNext();
    };

    return (
        <>
            <button onClick={prevSlideHandler}
                    className={cn(style.prevSlideButton, { [style.hidden]: isBeginning })}>
                <svg viewBox='2 2 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' width='20'
                     height='20'>
                    <path fillRule='evenodd' clipRule='evenodd'
                          d='M15.566 4.434a.8.8 0 0 1 0 1.13L9.13 12l6.435 6.434a.8.8 0 1 1-1.132 1.132l-7-7a.8.8 0 0 1 0-1.131l7-7a.8.8 0 0 1 1.132 0Z'
                          fill='#21201F' />
                </svg>
            </button>
            <button onClick={nextSlideHandler} className={cn(style.nextSlideButton, { [style.hidden]: isEnd })}>
                <svg viewBox='1 2 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' width='20'
                     height='20'>
                    <path fillRule='evenodd' clipRule='evenodd'
                          d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
                          fill='#21201F' />
                </svg>
            </button>
        </>
    );
};
