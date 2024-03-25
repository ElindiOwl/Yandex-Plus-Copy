import './Yandex-Music-Card.scss';
import { useEffect, useState } from 'react';

const YandexMusicCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValues, setTransformValues] = useState([0, -5]);

    useEffect(() => {
        const updateTransformValues = () => {
            const screenWidth = window.innerWidth;

            const newTransformValues =
                screenWidth >= 1200 ? [0, -115]
                    : screenWidth >= 1150 ? [0, -220]
                        : screenWidth >= 1100 ? [0, -270]
                            : screenWidth >= 1050 ? [0, -320]
                                : screenWidth >= 1000 ? [0, -370]
                                    : screenWidth >= 950 ? [0, -420]
                                        : screenWidth >= 900 ? [0, -470]
                                            : screenWidth >= 850 ? [0, -520]
                                                : screenWidth >= 800 ? [0, -570]
                                                    : screenWidth >= 750 ? [0, -130]
                                                        : screenWidth >= 700 ? [0, -180]
                                                            : screenWidth >= 650 ? [0, -230]
                                                                : screenWidth >= 600 ? [0, -280]
                                                                    : screenWidth >= 550 ? [0, -330]
                                                                        : screenWidth >= 500 ? [0, -380]
                                                                            : screenWidth >= 450 ? [0, -350, -425]
                                                                                : screenWidth >= 400 ? [0, -350, -480]
                                                                                    : screenWidth >= 350 ? [0, -350, -530]
                                                                                        : [0, -340, -640];

            setTransformValues(newTransformValues);
        };

        updateTransformValues();

        window.addEventListener('resize', updateTransformValues);

        return () => {
            window.removeEventListener('resize', updateTransformValues);
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === transformValues.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? transformValues.length - 1 : prevIndex - 1));
    };

    const transformStyle = {
        WebkitTransform: `translateX(${transformValues[currentIndex]}px)`,
        transform: `translateX(${transformValues[currentIndex]}px)`,
    };

    return (
        <section className='KinoPoiskCardSection'>
            <div className='card-text'>
                <h2 className='firstH'>Слушайте на Яндекс Музыке</h2>
            </div>
            <br />
            <div className='CardSetMusic' style={transformStyle}>
                <button className='firstCardMusic'></button>
                <button className='secondCardMusic'></button>
                <button className='thirdCardMusic'></button>
                <button className='fourthCardMusic'></button>
                <button className='fifthCardMusic'></button>
            </div>
            {currentIndex !== 0 && (
                <button className='prevButton' onClick={prevSlide}>
                    <svg viewBox='2 1 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M15.566 4.434a.8.8 0 0 1 0 1.13L9.13 12l6.435 6.434a.8.8 0 1 1-1.132 1.132l-7-7a.8.8 0 0 1 0-1.131l7-7a.8.8 0 0 1 1.132 0Z'
                              fill='#21201F' />
                    </svg>
                </button>
            )}
            {currentIndex !== transformValues.length - 1 && (
                <button className='nextButton' onClick={nextSlide}>
                    <svg viewBox='1 1 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
                        <path fillRule='evenodd' clipRule='evenodd'
                              d='M8.434 4.434a.8.8 0 0 0 0 1.13L14.87 12l-6.435 6.434a.8.8 0 0 0 1.132 1.132l7-7a.8.8 0 0 0 0-1.131l-7-7a.8.8 0 0 0-1.132 0Z'
                              fill='#21201F' />
                    </svg>
                </button>
            )}
        </section>
    );
};

export default YandexMusicCard;