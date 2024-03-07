import './NewInPlusCard.scss';
import { useEffect, useState } from 'react';
import Planet from '../../../../assets/Images/NewInPlusCardImages/Planet.png';
import Kognata from '../../../../assets/Images/NewInPlusCardImages/Kognata.png';
import Oscar from '../../../../assets/Images/NewInPlusCardImages/Oscar.png';
import LoveL from '../../../../assets/Images/NewInPlusCardImages/LoveLanguage.png';
import Kvizes from '../../../../assets/Images/NewInPlusCardImages/Kvizes.png';
import Final from '../../../../assets/Images/NewInPlusCardImages/FantasyFinal.png';
import Daily from '../../../../assets/Images/NewInPlusCardImages/DailyDragon.png';
import Kombinator from '../../../../assets/Images/NewInPlusCardImages/KombinatorGame.png';

const NewInPlusCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValues, setTransformValues] = useState(['0%', '-50%', '-100%']);

    useEffect(() => {
        const updateTransformValues = () => {
            const screenWidth = window.innerWidth;
            const newTransformValues =
                screenWidth >= 1250 ? ['0%', '-50%', '-99%', '-148%', '-197%', '-247%', '-296%']
                    : screenWidth >= 1100 ? ['0%', '-55%', '-108%', '-161%', '-215%', '-268%', '-322%']
                        : screenWidth >= 1000 ? ['0%', '-63%', '-124%', '-185%', '-246%', '-308%', '-369%', '-386%']
                            : screenWidth >= 900 ? ['0%', '-75%', '-148%', '-221%', '-294%', '-367%', '-441%', '-481%']
                                : ['0%', '-85%', '-170%', '-255%', '-339%', '-423%', '-508%', '-593%'];

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
                        <h3>Финал фэнтези-бестселлера уже в Букмейте</h3>
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

export default NewInPlusCard;