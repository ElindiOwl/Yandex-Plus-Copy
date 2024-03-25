import './PlusIdeasCard2.module.scss';
import { usePlusIdeasImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/usePlusIdeasImages';
import { AdvertisingCard } from 'src/Entities/advertising/ui/Plus-Ideas-Card-Set/AdvertisingCard';
import { NextSlideButton } from 'src/Shared/ui/Slide-Buttons/Next-Slide-Button/Next-Slide-Button';
import { PrevSlideButton } from 'src/Shared/ui/Slide-Buttons/Prev-Slide-Button/Prev-Slide-Button';
import style from './PlusIdeasCard2.module.scss';
import { FC, useRef, useState, useEffect } from 'react';
import { useDimensions } from 'src/Shared/lib/useDimensions';
import { getIsDesktop } from 'src/Shared/lib/getIsDesktop';

interface PlusIdeasCardProps {
    itemsToSlide?: number;
}

const PlusIdeasCard2: FC<PlusIdeasCardProps> = ({ itemsToSlide = 1 }) => {
    const [index, setIndex] = useState(0);
    const cardImages = usePlusIdeasImages();
    const cardRef = useRef(null);
    const { width } = useDimensions(cardRef);
    const hideOffSet = index === 0 ? 0 : getIsDesktop() ? -8 : -16;

    const gapWidth = getIsDesktop() ? 20 : 10;
    const lineWidth = (width + gapWidth) * cardImages.length - gapWidth;
    const offsetStrength = width + gapWidth;


    const onNext = () => {
        if (index >= cardImages.length) {
            return;
        }
        setIndex(prevIndex => prevIndex + 1);
    };

    const onPrev = () => {
        if (index <= 1) {
            return;
        }
        setIndex(prevIndex => prevIndex - 1);
    };

    return (
        <section className={style.plusIdeasCardSection}>
            <div className={style.cardText}>
                <h2 className={style.firstH}>Идеи, чем заняться в Плюсе</h2>
                <p className='firstP'>Собрали их для вас</p>
            </div>
            <div className={style.sliderOverflow}>
                <div style={{
                    width: `${lineWidth}px`,
                    transform: `translateX(calc(-${index * offsetStrength * itemsToSlide}px + ${hideOffSet}px ))`,
                }}
                     className={style.sliderItems}>
                    {cardImages.map((image, i) => (
                        <AdvertisingCard
                            ref={cardRef}
                            key={i}
                            src={image.src}
                            className='advertising-card'
                        />
                    ))}
                </div>
            </div>
            {index > 0 && <PrevSlideButton onClick={onPrev} />}
            {index + 1 <= cardImages.length && <NextSlideButton onClick={onNext} />}
        </section>
    );
};

export default PlusIdeasCard2;