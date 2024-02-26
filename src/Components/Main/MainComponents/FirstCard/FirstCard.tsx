import './FirstCard.scss';

const FirstCard = () => {
    return (
        <section className='firstCardSection'>
            <div className='card-text'>
                <h2 className='firstH'>Спортивный сезон в Плюсе</h2>
                <p className='firstP'>Болейте за любимые команды</p>
            </div>
            <div className='CardSet'>
                <button className='frCard'>
                    <div className='frCardInside'>
                        <h2>Билеты <br /> на плеф-офф Кубка Гагарина</h2>
                    </div>
                </button>
                <button className='scCard'>
                    <div className='scCardInside'>
                        <h2>Трансляция <br /> плей-офф КХЛ <br />на Кинопоиске</h2>
                    </div>
                </button>
                <button className='fdCard'>
                    <div className='fdCardInside'>
                        <h2>Футбольный матч "Зенит" - "Спартак"</h2>
                    </div>
                </button>
                <button className='ftCard'>
                    <div className='ftCardInside'>
                        <h2>Время спорта <br /> в Плюс Сити</h2>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default FirstCard;