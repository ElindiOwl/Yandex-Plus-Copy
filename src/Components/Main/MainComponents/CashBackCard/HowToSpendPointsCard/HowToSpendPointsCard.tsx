import './HowToSpendPointsCard.scss';
import { useEffect, useState } from 'react';

const HowToSpendPointsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValues, setTransformValues] = useState(['0%', '-5%']);

    useEffect(() => {
        const updateTransformValues = () => {
            const screenWidth = window.innerWidth;
            const newTransformValues =
                screenWidth >= 1250 ? ['0%', '-109%', '-162%', '-166%']
                    : screenWidth >= 1100 ? ['0%', '-122%', '-183%', '-199%']
                        : screenWidth >= 1000 ? ['0%', '-139%', '-207%', '-239%']
                            : screenWidth >= 900 ? ['0%', '-160%', '-239%', '-291%']
                                : ['0%', '-87%', '-172%', '-256%', '-319%'];

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
        <section className='HowToSpendCardSection'>
            <div className='card-text'>
                <h2 className='firstH'>Как потратить баллы</h2>
            </div>
            <br />
            <div className='CardSetSpend' style={transformStyle}>
                <button className='firstCardSpend'></button>
                <button className='secondCardSpend'></button>
                <button className='thirdCardSpend'></button>
                <button className='fourthCardSpend'></button>
                <button className='fifthCardSpend'></button>
                <button className='sixthCardSpend'></button>
                <button className='seventhCardSpend'></button>
                <button className='eighthCardSpend'></button>
                <button className='ninthCardSpend'></button>
                <button className='tenthCardSpend'></button>
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

export default HowToSpendPointsCard;