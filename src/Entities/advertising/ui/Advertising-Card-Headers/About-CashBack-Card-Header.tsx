import sectionStyle from 'src/Shared/ui/Card-Section/Card-Section-Styles.module.scss';
import YandexImage from 'src/Shared/assets/Images/Home-Page-Advertising/About-CashBack-Card-Images/Yandex.svg';

export const AboutCashBackCardHeader = () => {
    return (
        <div className={sectionStyle.cardText}>
            <h2 className={sectionStyle.firstH}>Кешбэк баллами Плюса</h2>
            <h2 className={sectionStyle.firstH}>при оплате через <img src={YandexImage} alt='Yandex' /> Пэй</h2>
        </div>
    );
};