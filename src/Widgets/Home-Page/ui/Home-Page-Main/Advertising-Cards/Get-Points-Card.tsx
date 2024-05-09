import { useGetPointsImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-GetPoints-Images.ts';
import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss';
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx';
import { CardsSlider } from 'src/Shared/ui/Slider/CardsSlider.tsx';
import { loadingTextPlaceHolder } from 'src/Shared/ui/loading-text-place-holder/loading-text-place-holder.ts';

export const GetPointsCard = () => {
    const cards = useGetPointsImages();
    const isLoading = loadingTextPlaceHolder(cards);

    return isLoading ? 'Loading...' : (
        <div className={style.sportSeasonCard}>
            <TextHeader header={'Как ещё получить баллы'} description={''} />
            <CardsSlider cardSize={'small'}
                         cards={cards}
                         cardType={'simple'}
                         itemsToSlide={0}
            />
        </div>
    );
};