import style from './Prev-Slide-Button.module.scss';
import { FC } from 'react';

interface PrevSlideButtonProps {
    onClick: () => void;
}

export const PrevSlideButton: FC<PrevSlideButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={style.prevSlideButton}>
            <svg viewBox='2 2 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' width='20'
                 height='20'>
                <path fillRule='evenodd' clipRule='evenodd'
                      d='M15.566 4.434a.8.8 0 0 1 0 1.13L9.13 12l6.435 6.434a.8.8 0 1 1-1.132 1.132l-7-7a.8.8 0 0 1 0-1.131l7-7a.8.8 0 0 1 1.132 0Z'
                      fill='#21201F' />
            </svg>
        </button>
    );
};
