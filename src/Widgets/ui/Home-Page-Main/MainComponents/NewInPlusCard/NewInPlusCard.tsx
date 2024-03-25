import './NewInPlusCard.scss';
import { useEffect, useState } from 'react';
import Planet from '../../../../../Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/Planet.png';
import Kognata from '../../../../../Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/Kognata.png';
import Oscar from '../../../../../Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/Oscar.png';
import LoveL from '../../../../../Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/LoveLanguage.png';
import Kvizes from '../../../../../Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/Kvizes.png';
import Final from '../../../../../Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/FantasyFinal.png';
import Daily from '../../../../../Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/DailyDragon.png';
import Kombinator
    from '../../../../../Shared/assets/Images/Home-Page-Advertising/New-In-Plus-Card-Images/KombinatorGame.png';

const NewInPlusCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValues, setTransformValues] = useState([0, -5]);

    useEffect(() => {
        const updateTransformValues = () => {
            const screenWidth = window.innerWidth;

            const newTransformValues =
                screenWidth >= 1200 ? [0, -470, -940, -1410, -1880, -2350, -2820]
                    : screenWidth >= 1150 ? [0, -470, -940, -1410, -1880, -2350, -2880]
                        : screenWidth >= 1100 ? [0, -470, -940, -1410, -1880, -2350, -2820, -2920]
                            : screenWidth >= 1050 ? [0, -470, -940, -1410, -1880, -2350, -2820, -2980]
                                : screenWidth >= 1000 ? [0, -470, -940, -1410, -1880, -2350, -2820, -3020]
                                    : screenWidth >= 950 ? [0, -470, -940, -1410, -1880, -2350, -2820, -3080]
                                        : screenWidth >= 900 ? [0, -470, -940, -1410, -1880, -2350, -2820, -3120]
                                            : screenWidth >= 850 ? [0, -470, -940, -1410, -1880, -2350, -2820, -3180]
                                                : screenWidth >= 800 ? [0, -470, -940, -1410, -1880, -2350, -2820, -3220]
                                                    : screenWidth >= 750 ? [0, -660, -1320, -1980]
                                                        : screenWidth >= 700 ? [0, -660, -1320, -1980]
                                                            : screenWidth >= 650 ? [0, -335, -670, -995, -1325, -1655, -1985, -2020]
                                                                : screenWidth >= 600 ? [0, -335, -670, -995, -1325, -1655, -1985, -2070]
                                                                    : screenWidth >= 550 ? [0, -335, -670, -995, -1325, -1655, -1985, -2120]
                                                                        : screenWidth >= 500 ? [0, -335, -670, -995, -1325, -1655, -1985, -2170]
                                                                            : screenWidth >= 450 ? [0, -335, -670, -995, -1325, -1655, -1985, -2220]
                                                                                : screenWidth >= 400 ? [0, -335, -670, -995, -1325, -1655, -1985, -2270]
                                                                                    : screenWidth >= 350 ? [-10, -340, -670, -1000, -1330, -1660, -1990, -2320]
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
        <section className='newInPlusCardSection'>
            <div className='card-text'>
                <h2 className='firstH'>Новое в Плюсе</h2>
            </div>
            <br />
            <div className='CardSetNewInPlus' style={transformStyle}>
                <button className='firstCardNewInPlus'>
                    <img
                        src={Planet}
                        alt='Planet'
                    />
                    <div>
                        <h3>Вокруг Плюса за 10 дней</h3>
                        <p>Найдите Артефакты в сервисах Яндекса и выиграйте приз</p>
                    </div>
                </button>
                <button className='secondCardNewInPlus'>
                    <img
                        src={Kognata}
                        alt='Kognata'
                    />
                    <div>
                        <h3>«Когната» в Букмейте</h3>
                        <p>Слушайте аудиосериал от автора «Петровых в гриппе»</p>
                    </div>
                </button>
                <button className='thirdCardNewInPlus'>
                    <img
                        src={Oscar}
                        alt='Oscar'
                    />
                    <div>
                        <h3>Игра с призами от Кинопоиска</h3>
                        <p>Угадайте победителей «Оскара»</p>
                    </div>
                </button>
                <button className='fourthCardNewInPlus'>
                    <img
                        src={LoveL}
                        alt='LoveL'
                    />
                    <div>
                        <h3>Прочитайте «Язык любви»</h3>
                        <p>10 принципов общения с любым человеком</p>
                    </div>
                </button>
                <button className='fifthCardNewInPlus'>
                    <img
                        src={Kvizes}
                        alt='Kvizes'
                    />
                    <div>
                        <h3>Квизы на Кинопоиске</h3>
                        <p>Собирайте компанию и играйте все вместе</p>
                    </div>
                </button>
                <button className='sixthCardNewInPlus'>
                    <img
                        src={Final}
                        alt='Final'
                    />
                    <div>
                        <h3>Финал фэнтези-бестселлера</h3>
                        <p>Читайте все 6 томов «Благословения Небожителей»</p>
                    </div>
                </button>
                <button className='seventhCardNewInPlus'>
                    <img
                        src={Daily}
                        alt='Daily'
                    />
                    <div>
                        <h3>Вам мудрость от дракона Дей Ли</h3>
                        <p>Пользуйтесь сервисами Яндекса и получайте подарки</p>
                    </div>
                </button>
                <button className='eighthCardNewInPlus'>
                    <img
                        src={Kombinator}
                        alt='Kombinator'
                    />
                    <div>
                        <h3>Новая игра — Комбинатор</h3>
                        <p>Помогайте жителям Плюс Сити и выполняйте их заказы</p>
                    </div>
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

export default NewInPlusCard;