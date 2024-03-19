import './PlusIdeasCard.scss';
import { useEffect, useState } from 'react';

const PlusIdeadCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValues, setTransformValues] = useState([0, -5]);

    useEffect(() => {
        const updateTransformValues = () => {
            const screenWidth = window.innerWidth;

            const newTransformValues =
                screenWidth >= 1200 ? [0, -45]
                    : screenWidth >= 1150 ? [0, -150]
                        : screenWidth >= 1100 ? [0, -200]
                            : screenWidth >= 1050 ? [0, -250]
                                : screenWidth >= 1000 ? [0, -300]
                                    : screenWidth >= 950 ? [0, -350]
                                        : screenWidth >= 900 ? [0, -400]
                                            : screenWidth >= 850 ? [0, -450]
                                                : screenWidth >= 800 ? [0, -500]
                                                    : screenWidth >= 750 ? [0]
                                                        : screenWidth >= 700 ? [0]
                                                            : screenWidth >= 650 ? [0, -45]
                                                                : screenWidth >= 600 ? [0, -90]
                                                                    : screenWidth >= 550 ? [0, -140]
                                                                        : screenWidth >= 500 ? [0, -190]
                                                                            : screenWidth >= 450 ? [0, -240]
                                                                                : screenWidth >= 400 ? [0, -290]
                                                                                    : screenWidth >= 350 ? [0, -345]
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
        <section className='plusIdeasCardSection'>
            <div className='card-text'>
                <h2 className='firstH'>Идеи, чем заняться в Плюсе</h2>
                <p className='firstP'>Собрали их для вас</p>
            </div>
            <br />
            <div className='CardSetIdea' style={transformStyle}>
                <button className='frCardIdea'>
                </button>
                <button className='scCardIdea'>
                </button>
                <button className='fdCardIdea'>
                </button>
                <button className='ftCardIdea'>
                </button>
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

export default PlusIdeadCard;