import sectionStyle from 'src/Shared/ui/Card-Section/Card-Section-Styles.module.scss';

export const YandexMusicCardHeader = () => {
    return (
        <div className={sectionStyle.cardText}>
            <h2 className={sectionStyle.firstH}>Слушайте на Яндекс Музыке</h2>
        </div>
    );
};