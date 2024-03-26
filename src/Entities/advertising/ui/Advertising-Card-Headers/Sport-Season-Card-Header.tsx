import sectionStyle from 'src/Shared/ui/Card-Section/Card-Section-Styles.module.scss';

export const SportSeasonCardHeader = () => {
    return (
        <div className={sectionStyle.cardText}>
            <h2 className={sectionStyle.firstH}>Спортивный сезон в Плюсе</h2>
            <p>Болейте за любимые команды</p>
        </div>
    );
};