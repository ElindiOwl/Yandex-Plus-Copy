import { useGetPointsImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-GetPoints-Images.ts';
import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss';
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx';
import { CARD_SIZE, CARD_TYPE, CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx';
import { useLoading } from 'src/Shared/model/use-loading.ts';
import { SkeletonCard } from 'src/Shared/ui/Skeleton-PlaceHolder/Skeleton-Card/Skeleton-Card.tsx';

export const GetPointsCard = () => {
    const cards = useGetPointsImages();
    const isLoading = useLoading(cards);
    const isError = false;

    const cardProps: { cardSize: CARD_SIZE, cardType: CARD_TYPE, slidesPerView: number, isLoading: boolean } = {
        cardSize: 'small',
        cardType: 'simple',
        slidesPerView: 4,
        isLoading,
    };

    if (isError) {
        return 'Error';
    }
    if (isLoading) {
        return <SkeletonCard {...cardProps} />;
    }
    return (
        <div className={style.genericCard}>
            <TextHeader header={'Как ещё получить баллы'} description={''} />
            <CardsSlider {...cardProps}
                         cards={cards}
                         slidesPerGroup={1}
            />
        </div>
    );
};