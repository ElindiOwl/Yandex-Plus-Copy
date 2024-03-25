import './PlusIdeasCard.scss';
import { useEffect, useState } from 'react';
import { usePlusIdeasImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/usePlusIdeasImages';
import { AdvertisingCard } from 'src/Entities/advertising/ui/Plus-Ideas-Card-Set/AdvertisingCard';
import { NextSlideButton } from 'src/Shared/ui/Slide-Buttons/Next-Slide-Button/Next-Slide-Button';
import { PrevSlideButton } from 'src/Shared/ui/Slide-Buttons/Prev-Slide-Button/Prev-Slide-Button';

const PlusIdeasCard = () => {
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

    const cardImages = usePlusIdeasImages();

    return (
        <section className='plusIdeasCardSection'>
            <div className='card-text'>
                <h2 className='firstH'>Идеи, чем заняться в Плюсе</h2>
                <p className='firstP'>Собрали их для вас</p>
            </div>
            <br />
            <div className='cardSetIdea' style={transformStyle}>
                {cardImages.map((image) => {
                    return (
                        <AdvertisingCard
                            src={image.src}
                        />
                    );
                })}
            </div>
            {currentIndex !== 0 && (
                <PrevSlideButton onClick={prevSlide} />
            )}
            {currentIndex !== transformValues.length - 1 && (
                <NextSlideButton onClick={nextSlide} />
            )}
        </section>
    );
};

export default PlusIdeasCard;