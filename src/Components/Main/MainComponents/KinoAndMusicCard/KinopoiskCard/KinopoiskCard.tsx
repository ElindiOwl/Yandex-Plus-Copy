import './KinopoiskCard.scss';
import { useEffect, useState } from 'react';

const KinopoiskCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValues, setTransformValues] = useState(['0%', '-50%', '-100%']);

    useEffect(() => {
        const updateTransformValues = () => {
            const screenWidth = window.innerWidth;
            const newTransformValues =
                screenWidth >= 1250 ? ['0%', '-82%', '-190%', '-243%', '-247%']
                    : screenWidth >= 1100 ? ['0%', '-95%', '-220%', '-282%', '-302%']
                        : screenWidth >= 1000 ? ['0%', '-110%', '-254%', '-326%', '-364%']
                            : screenWidth >= 900 ? ['0%', '-120%', '-279%', '-358%', '-410%']
                                : ['0%', '-87%', '-172%', '-257%', '-341%', '-426%', '-446%'];

            setTransformValues(newTransformValues);
        };

        updateTransformValues();

        window.addEventListener('resize', updateTransformValues);

        return () => {
            window.removeEventListener('resize', updateTransformValues);
        };
    }, []);

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

export default KinopoiskCard;