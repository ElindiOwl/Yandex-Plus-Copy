import {
    useSportSeasonImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Sport-Season-Images.ts';
import { CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx';
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx';
import style from './Card.module.scss';
import { loadingTextPlaceHolder } from 'src/Shared/ui/loading-text-place-holder/loading-text-place-holder.ts';

export const SportSeasonCard = () => {
    const cards = useSportSeasonImages();
    const isLoading = loadingTextPlaceHolder(cards);

    return isLoading ? 'Loading...' : (
        <div className={style.sportSeasonCard}>
            <TextHeader header={'Спортивный сезон в Плюсе'} description={'Болейте за любимые команды'} />
            <CardsSlider cardSize={'tall'}
                         cards={cards}
                         cardType={'simple'}
                         slidesPerView={4}
            />
        </div>
    );
};