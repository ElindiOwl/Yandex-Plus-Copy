import {
    usePlusIdeasImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Plus-Ideas-Images.ts';
import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss';
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx';
import { CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx';
import { loadingTextPlaceHolder } from 'src/Shared/ui/loading-text-place-holder/loading-text-place-holder.ts';

export const PlusIdeasCard = () => {
    const cards = usePlusIdeasImages();
    const isLoading = loadingTextPlaceHolder(cards);

    return isLoading ? 'Loading...' : (
        <div className={style.container}>
            <div className={style.genericCard}>
                <TextHeader header={'Идеи, чем заняться в Плюсе'} description={'Собрали их для вас'} />
                <CardsSlider cardSize={'tall'}
                             cards={cards}
                             cardType={'simple'}
                             slidesPerView={4}
                />
            </div>
        </div>
    );
};