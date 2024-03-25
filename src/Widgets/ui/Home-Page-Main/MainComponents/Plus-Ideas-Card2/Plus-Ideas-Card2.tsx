import { usePlusIdeasImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Plus-Ideas-Images';
import { AdvertisingCard } from 'src/Entities/advertising/ui/Advertising-Card/Advertising-Card';
import { NextSlideButton } from 'src/Shared/ui/Slide-Buttons/Next-Slide-Button/Next-Slide-Button';
import { PrevSlideButton } from 'src/Shared/ui/Slide-Buttons/Prev-Slide-Button/Prev-Slide-Button';
import sliderStyle from 'src/Shared/ui/Sliders/Tall-Slider-Styles.module.scss';
import sectionStyle from 'src/Shared/ui/Card-Section/Card-Section-Styles.module.scss';
import { FC, useRef, useState, useEffect } from 'react';
import { useDimensions } from 'src/Shared/lib/useDimensions';
import { getIsDesktop } from 'src/Shared/lib/getIsDesktop';
import { ImageCardsSlideProps } from 'src/Entities/advertising/model/Image-Cards-Slide-Type';

const PlusIdeasCard2: FC<ImageCardsSlideProps> = ({ itemsToSlide = 1 }) => {
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
        if (index === 0) {
            return;
        }
        setIndex(prevIndex => prevIndex - 1);
    };

    return (
        <section className={sectionStyle.cardSection}>
            <div className={sectionStyle.cardText}>
                <h2 className={sectionStyle.firstH}>Идеи, чем заняться в Плюсе</h2>
                <p>Собрали их для вас</p>
            </div>
            <div className={sliderStyle.sliderOverflow}>
                <div style={{
                    width: `${lineWidth}px`,
                    transform: `translateX(calc(-${index * offsetStrength * itemsToSlide}px + ${hideOffSet}px ))`,
                }}
                     className={sliderStyle.sliderItems}>
                    {cardImages.map((image, i) => (
                        <AdvertisingCard
                            ref={cardRef}
                            key={i}
                            src={image.src}
                            cardSize={'tall'}
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