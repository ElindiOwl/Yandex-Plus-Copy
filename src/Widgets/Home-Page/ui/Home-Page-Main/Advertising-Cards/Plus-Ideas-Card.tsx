import {
    usePlusIdeasImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Plus-Ideas-Images.ts';
import style from 'src/Widgets/Home-Page/ui/Home-Page-Main/Advertising-Cards/Card.module.scss';
import { TextHeader } from 'src/Shared/ui/Text-Header/Text-Header.tsx';
import { CardsSlider } from 'src/Shared/ui/Slider/Cards-Slider.tsx';
import { useLoading } from 'src/Shared/model/use-loading.ts';
import { SkeletonCard } from 'src/Shared/ui/Skeleton-PlaceHolder/Skeleton-Card/Skeleton-Card.tsx';

export const PlusIdeasCard = () => {
    const cards = usePlusIdeasImages();
    const isLoading = useLoading(cards);

    const cardProps = {
        cardSize: 'tall',
        cardType: 'simple',
        slidesPerView: 4,
    };

    return isLoading ? <SkeletonCard {...cardProps} /> : (
        <div className={style.container}>
            <div className={style.genericCard}>
                <TextHeader header={'Идеи, чем заняться в Плюсе'} description={'Собрали их для вас'} />
                <CardsSlider {...cardProps} cards={cards} />
            </div>
        </div>
    );
};