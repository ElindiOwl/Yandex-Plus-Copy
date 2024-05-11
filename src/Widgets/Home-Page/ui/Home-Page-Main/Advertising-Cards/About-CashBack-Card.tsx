import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss';
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx';
import { CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx';
import yandex from 'src/Shared/assets/Images/Home-Page-Advertising/About-CashBack-Card-Images/Yandex.svg';
import {
    useAboutCashBackImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-About-CashBack-Images.ts';
import { loadingTextPlaceHolder } from 'src/Shared/ui/loading-text-place-holder/loading-text-place-holder.ts';

export const AboutCashBackCard = () => {
    const cards = useAboutCashBackImages();
    const isLoading = loadingTextPlaceHolder(cards);

    return isLoading ? 'Loading...' : (
        <div className={style.sportSeasonCard}>
            <TextHeader
                header={
                    <>
                        Кешбэк баллами Плюса <br /> при оплате через <img src={yandex} alt='yandex' /> Пэй
                    </>
                }
            />
            <CardsSlider cardSize={'tall'}
                         cards={cards}
                         cardType={'simple'}
                         slidesPerGroup={2}
            />
        </div>
    );
};