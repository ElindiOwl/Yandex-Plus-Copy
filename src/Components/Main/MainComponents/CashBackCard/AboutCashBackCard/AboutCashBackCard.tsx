import './AboutCashBackCard.scss';
import { useEffect, useState } from 'react';
import YandexImage from '../../../../../assets/Images/AboutCashBackCardImages/Yandex.svg';

const AboutCashBackCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValues, setTransformValues] = useState(['0%', '-5%']);

    useEffect(() => {
        const updateTransformValues = () => {
            const screenWidth = window.innerWidth;
            const newTransformValues =
                screenWidth >= 1250 ? ['0%', '-55%', '-59%']
                    : screenWidth >= 1100 ? ['0%', '-62%', '-78%']
                        : screenWidth >= 1000 ? ['0%', '-71%', '-105%']
                            : screenWidth >= 900 ? ['0%', '-81%', '-133%']
                                : ['0%', '-87%', '-150%'];

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
        <section className='AboutCardSection'>
            <div className='card-textAbout'>
                <h2 className='titleAbout'>Кешбэк баллами Плюса</h2>
                <h2 className='infoAbout'>при оплате через <img src={YandexImage} alt='Yandex' /> Пэй</h2>
            </div>
            <br />
            <div className='CardSetAbout' style={transformStyle}>
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