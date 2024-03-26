import sliderStyle from 'src/Shared/ui/Sliders/Tall-Slider-Styles.module.scss';
import sectionStyle from 'src/Shared/ui/Card-Section/Card-Section-Styles.module.scss';
import { FC, useRef, useState } from 'react';
import { PrevSlideButton } from 'src/Shared/ui/Slide-Buttons/Prev-Slide-Button/Prev-Slide-Button';
import { NextSlideButton } from 'src/Shared/ui/Slide-Buttons/Next-Slide-Button/Next-Slide-Button';
import { AdvertisingCard } from 'src/Entities/advertising/ui/Advertising-Card/Advertising-Card';
import { useDimensions } from 'src/Shared/lib/useDimensions';
import { getIsDesktop } from 'src/Shared/lib/getIsDesktop';
import { ImageCardsSlideProps } from 'src/Entities/advertising/model/Image-Cards-Slide-Type';
import { useMusicImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Music-Images';
import { YandexMusicCardHeader } from 'src/Entities/advertising/ui/Advertising-Card-Headers/Yandex-Music-Card-Header';
import {
    MoveSlideRight,
} from 'src/Shared/model/Slide-Buttons-Control/Next-Slide-Button-Control/Next-Slide-Button-Control';
import {
    MoveSlideLeft,
} from 'src/Shared/model/Slide-Buttons-Control/Prev-Slide-Button-Control/Next-Slide-Button-Control';

const YandexMusicCard: FC<ImageCardsSlideProps> = ({ itemsToSlide = 1 }) => {
    const [index, setIndex] = useState(0);
    const cardImages = useMusicImages();
    const cardRef = useRef(null);
    const { width } = useDimensions(cardRef);
    const hideOffSet = index === 0 ? 0 : getIsDesktop() ? -8 : -16;

    const gapWidth = getIsDesktop() ? 20 : 10;
    const lineWidth = (width + gapWidth) * cardImages.length - gapWidth;
    const offsetStrength = width + gapWidth;


    const onNext = () => MoveSlideRight(index, setIndex, cardImages);

    const onPrev = () => MoveSlideLeft(index, setIndex);

    return (
        <section className={sectionStyle.cardSection}
                 style={{ paddingTop: 5 }}
        >
            <YandexMusicCardHeader />
            <div className={sliderStyle.sliderOverflow}
                 style={{ paddingBottom: 5 }}
            >
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
                            cardSize={'small'}
                        />
                    ))}
                </div>
            </div>
            {index > 0 && <PrevSlideButton onClick={onPrev} />}
            {index + 1 <= cardImages.length && <NextSlideButton onClick={onNext} />}
        </section>
    );
};

export default YandexMusicCard;