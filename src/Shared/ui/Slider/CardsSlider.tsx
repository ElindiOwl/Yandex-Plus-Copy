import { PrevSlideButton } from 'src/Shared/ui/Slide-Buttons/Prev-Slide-Button/Prev-Slide-Button';
import { NextSlideButton } from 'src/Shared/ui/Slide-Buttons/Next-Slide-Button/Next-Slide-Button';
import style from './CardSlider.module.scss';
import { FC, useRef, useState } from 'react';
import { useDimensions } from 'src/Shared/lib/useDimensions';
import { getIsDesktop } from 'src/Shared/lib/getIsDesktop';
import {
    moveSlideRight,
} from 'src/Shared/model/Slide-Buttons-Control/Next-Slide-Button-Control/Next-Slide-Button-Control';
import {
    moveSlideLeft,
} from 'src/Shared/model/Slide-Buttons-Control/Prev-Slide-Button-Control/Next-Slide-Button-Control';
import { CardSliderTemplate } from 'src/Entities/advertising/model/CardSliderTemplate';
import { CardSimple } from 'src/Shared/ui/Slider/Card/Card-Simple';
import { CardComposite } from 'src/Shared/ui/Slider/Card/Card-Сomposite';

export type CARD_SIZE = 'tall' | 'small' | 'wide'
export type CARD_TYPE = 'simple' | 'composite'

interface SliderProps {
    cards: CardSliderTemplate[];
    itemsToSlide?: number;
    cardSize: CARD_SIZE;
    cardType: CARD_TYPE;
}

const cardsType = {
    simple: CardSimple,
    composite: CardComposite,
};

export const CardsSlider: FC<SliderProps> = ({ cards = 1, itemsToSlide = 1, cardSize, cardType }) => {
    const [index, setIndex] = useState(0);
    const cardRef = useRef(null);
    const { width } = useDimensions(cardRef);
    const hideOffSet = index === 0 ? 0 : getIsDesktop() ? -8 : -16;
    const Card = cardsType[cardType];

    const gapWidth = getIsDesktop() ? 20 : 10;
    const lineWidth = (width + gapWidth) * cards.length - gapWidth;
    const offsetStrength = (width + gapWidth) * index * itemsToSlide;


    const onNext = () => moveSlideRight(index, setIndex, cards);
    const onPrev = () => moveSlideLeft(index, setIndex);

    return (
        <div className={style.slider}>
            <div className={style.sliderOverflow}>
                <div style={{
                    width: `${lineWidth}px`,
                    transform: `translateX(calc(-${offsetStrength}px + ${hideOffSet}px))`,
                }}
                     className={style.sliderItems}>
                    {cards.map((data, i) => (
                        <Card
                            ref={cardRef}
                            key={i}
                            src={data.src}
                            cardSize={cardSize}
                            sliderHeader={data.sliderHeader || ''}
                            sliderDescription={data.sliderDescription || ''}
                        />
                    ))}
                </div>
            </div>
            {index > 0 && <PrevSlideButton onClick={onPrev} />}
            {index + 3 < cards.length && <NextSlideButton onClick={onNext} />}
        </div>
    );
};