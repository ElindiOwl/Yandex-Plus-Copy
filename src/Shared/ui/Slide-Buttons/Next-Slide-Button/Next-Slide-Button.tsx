import style from './Next-Slide-Button.module.scss';
import { FC } from 'react';

interface NextSlideButtonProps {
    onClick: () => void;
}

export const NextSlideButton: FC<NextSlideButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={style.nextSlideButton}>
            <svg viewBox='1 2 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' width='20'
                 height='20'>
                <path fillRule='evenodd' clipRule='evenodd'
                      d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
                      fill='#21201F' />
            </svg>
        </button>
    );
};
