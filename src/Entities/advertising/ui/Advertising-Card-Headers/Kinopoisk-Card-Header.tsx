import sectionStyle from 'src/Shared/ui/Card-Section/Card-Section-Styles.module.scss';

export const KinopoiskCardHeader = () => {
    return (
        <div className={sectionStyle.cardText}>
            <h2 className={sectionStyle.firstH}>Смотрите на Кинопоиске</h2>
        </div>
    );
};