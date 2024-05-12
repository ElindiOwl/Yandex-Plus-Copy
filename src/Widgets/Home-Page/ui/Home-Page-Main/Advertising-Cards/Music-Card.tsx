import { useMusicImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Music-Images.ts';
import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss';
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx';
import { CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx';
import { loadingTextPlaceHolder } from 'src/Shared/ui/loading-text-place-holder/loading-text-place-holder.ts';

export const MusicCard = () => {
    const cards = useMusicImages();
    const isLoading = loadingTextPlaceHolder(cards);

    return isLoading ? 'Loading...' : (
        <div className={style.sportSeasonCard}>
            <TextHeader header={'Слушайте на Яндекс Музыке'} description={''} />
            <CardsSlider cardSize={'small'}
                         cards={cards}
                         cardType={'simple'}
                         slidesPerView={4.7}
            />
        </div>
    );
};