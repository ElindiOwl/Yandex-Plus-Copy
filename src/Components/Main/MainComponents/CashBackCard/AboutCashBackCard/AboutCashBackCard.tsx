import './AboutCashBackCard.scss';
import React, { useState } from 'react';
import YandexImage from '../../../../../assets/Images/AboutCashBackCardImages/Yandex.svg';

const AboutCashBackCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const transformValues = ['0%', '-64%'];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === transformValues.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? transformValues.length - 1 : prevIndex - 1));
    };

    const transformStyle = {
        transform: `translateX(${transformValues[currentIndex]})`,
    };

    return (
        <section className='KinoPoiskCardSection'>
            <div className='card-textAbout'>
                <h2 className='titleAbout'>Кешбэк баллами Плюса</h2>
                <h2 className='infoAbout'>при оплате через <img src={YandexImage} alt='Yandex' /> Пэй</h2>
            </div>
            <br />
            <div className='CardSet' style={transformStyle}>
                <button className='firstCardAbout'></button>
                <button className='secondCardAbout'></button>
                <button className='thirdCardAbout'></button>
                <button className='fourthCardAbout'></button>
                <button className='fifthCardAbout'></button>
                <button className='sixthCardAbout'></button>
            </div>
            {currentIndex !== 0 && (
                <button className='prevButton' onClick={prevSlide}>
                    <svg viewBox='1 3 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M15.566 4.434a.8.8 0 0 1 0 1.13L9.13 12l6.435 6.434a.8.8 0 1 1-1.132 1.132l-7-7a.8.8 0 0 1 0-1.131l7-7a.8.8 0 0 1 1.132 0Z'
                              fill='#21201F' />
                    </svg>
                </button>
            )}
            {currentIndex !== transformValues.length - 1 && (
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

export default AboutCashBackCard;