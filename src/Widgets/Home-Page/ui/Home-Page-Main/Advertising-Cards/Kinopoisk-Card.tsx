import { useKinopoiskImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Kinopoisk-Images.ts';
import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss';
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx';
import { CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx';
import { loadingTextPlaceHolder } from 'src/Shared/ui/loading-text-place-holder/loading-text-place-holder.ts';

export const KinopoiskCard = () => {
    const cards = useKinopoiskImages();
    const isLoading = loadingTextPlaceHolder(cards);

    return isLoading ? 'Loading...' : (
        <div className={style.sportSeasonCard}>
            <TextHeader header={'Смотрите на Кинопоиске'} description={''} />
            <CardsSlider cardSize={'tall'}
                         cards={cards}
                         cardType={'simple'}
                         slidesPerGroup={3}
                         slidesPerView={4}
            />
        </div>
    );
};