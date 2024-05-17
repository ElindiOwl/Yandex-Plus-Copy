import { useNewInPlusData } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-New-In-Plus-Data.ts';
import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss';
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx';
import { CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx';
import { loadingTextPlaceHolder } from 'src/Shared/ui/loading-text-place-holder/loading-text-place-holder.ts';

export const NewInPlusCard = () => {
    const cards = useNewInPlusData();
    const isLoading = loadingTextPlaceHolder(cards);

    return isLoading ? 'Loading...' : (
        <div className={style.container}>
            <div className={style.genericCard}>
                <TextHeader header={'Новое в Плюсе'} description={''} />
                <CardsSlider cardSize={'wide'}
                             cards={cards}
                             cardType={'composite'}
                             slidesPerView={2.15}
                />
            </div>
        </div>
    );
};