import './KinopoiskCard.scss';
import { useEffect, useState } from 'react';

const KinopoiskCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValues, setTransformValues] = useState([0, -5]);

    useEffect(() => {
        const updateTransformValues = () => {
            const screenWidth = window.innerWidth;

            const newTransformValues =
                screenWidth >= 1200 ? [0, -780, -1550, -2320, -2350]
                    : screenWidth >= 1150 ? [0, -780, -1550, -2320, -2450]
                        : screenWidth >= 1100 ? [0, -780, -1550, -2320, -2500]
                            : screenWidth >= 1050 ? [0, -780, -1550, -2320, -2550]
                                : screenWidth >= 1000 ? [0, -525, -1035, -1550, -2060, -2570, -2600]
                                    : screenWidth >= 950 ? [0, -525, -1035, -1550, -2060, -2570, -2650]
                                        : screenWidth >= 900 ? [0, -525, -1035, -1550, -2060, -2570, -2700]
                                            : screenWidth >= 850 ? [0, -525, -1035, -1550, -2060, -2570, -2750]
                                                : screenWidth >= 800 ? [0, -525, -1035, -1550, -2060, -2570, -2800]
                                                    : screenWidth >= 750 ? [0, -670, -1335, -1440]
                                                        : screenWidth >= 700 ? [0, -670, -1335, -1490]
                                                            : screenWidth >= 650 ? [0, -505, -1005, -1505, -1540]
                                                                : screenWidth >= 600 ? [0, -505, -1005, -1505, -1590]
                                                                    : screenWidth >= 550 ? [0, -505, -1005, -1505, -1640]
                                                                        : screenWidth >= 500 ? [0, -340, -670, -1005, -1335, -1670, -1690]
                                                                            : screenWidth >= 450 ? [0, -340, -670, -1005, -1335, -1670, -1740]
                                                                                : screenWidth >= 400 ? [0, -340, -670, -1005, -1335, -1670, -1790]
                                                                                    : screenWidth >= 350 ? [0, -340, -670, -1005, -1335, -1670, -1835]
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
                <h2 className='firstH'>Смотрите на Кинопоиске</h2>
            </div>
            <br />
            <div className='CardSetKino' style={transformStyle}>
                <button className='firstCardKino'></button>
                <button className='secondCardKino'></button>
                <button className='thirdCardKino'></button>
                <button className='fourthCardKino'></button>
                <button className='fifthCardKino'></button>
                <button className='sixthCardKino'></button>
                <button className='seventhCardKino'></button>
                <button className='eighthCardKino'></button>
                <button className='ninthCardKino'></button>
                <button className='tenthCardKino'></button>
                <button className='eleventhCardKino'></button>
                <button className='twelfthCardKino'></button>
                <button className='thirteenthCardKino'></button>
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

export default KinopoiskCard;