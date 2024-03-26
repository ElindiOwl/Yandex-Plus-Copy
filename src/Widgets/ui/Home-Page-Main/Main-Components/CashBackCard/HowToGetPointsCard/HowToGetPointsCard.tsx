import './HowToGetPointsCard.scss';

const HowToGetPointsCard = () => {

    return (
        <section className='HowToGetPointsCardSection'>
            <div className='card-text'>
                <h2 className='firstH'>Как ещё получить баллы</h2>
            </div>
            <br />
            <div className='CardSetHowToGetPoints'>
                <button className='firstCardSetHowToGetPoints'></button>
                <button className='secondCardSetHowToGetPoints'></button>
                <button className='thirdCardSetHowToGetPoints'></button>
                <button className='fourthCardSetHowToGetPoints'></button>
            </div>
        </section>
    );
};

export default HowToGetPointsCard;