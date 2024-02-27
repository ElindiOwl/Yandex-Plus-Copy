import './FirstCard.scss';
import React, { useState } from 'react';


const FirstCard = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1));
    };

    const transformStyle = {
        transform: `translateX(-${currentIndex * 7}%)`,
    };

    return (
        <section className='firstCardSection'>
            <div className='card-text'>
                <h2 className='firstH'>Спортивный сезон в Плюсе</h2>
                <p className='firstP'>Болейте за любимые команды</p>
            </div>
            <div className='CardSet' style={transformStyle}>
                <button className='frCard'>
                    <div className='frCardInside'>
                        <h2>Билеты <br /> на плеф-офф Кубка Гагарина</h2>
                    </div>
                </button>
                <button className='scCard'>
                    <div className='scCardInside'>
                        <h2>Трансляция <br /> плей-офф КХЛ <br />на Кинопоиске</h2>
                    </div>
                </button>
                <button className='fdCard'>
                    <div className='fdCardInside'>
                        <h2>Футбольный матч "Зенит" - "Спартак"</h2>
                    </div>
                </button>
                <button className='ftCard'>
                    <div className='ftCardInside'>
                        <h2>Время спорта <br /> в Плюс Сити</h2>
                    </div>
                </button>
            </div>
            {currentIndex === 1 && (
                <button className='prevButton' onClick={prevSlide}>
                    <svg viewBox='1 3 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M15.566 4.434a.8.8 0 0 1 0 1.13L9.13 12l6.435 6.434a.8.8 0 1 1-1.132 1.132l-7-7a.8.8 0 0 1 0-1.131l7-7a.8.8 0 0 1 1.132 0Z'
                              fill='#21201F' />
                    </svg>
                </button>
            )}
            {currentIndex === 0 && (
                <button className='nextButton' onClick={nextSlide}>
                    <svg viewBox='1 3 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
                              fill='#21201F' />
                    </svg>
                </button>
            )}
        </section>
    );
};

export default FirstCard;