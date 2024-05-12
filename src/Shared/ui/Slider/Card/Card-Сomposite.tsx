import style from 'src/Shared/ui/Slider/Card/Card.module.scss';
import { FC, forwardRef } from 'react';
import { cardSizeVariants } from 'src/Shared/lib/Slider/card-Size-Variants.ts';
import { CardSliderTemplate } from 'src/Entities/advertising/model/CardSliderTemplate.ts';

export const CardComposite: FC<CardSliderTemplate> = forwardRef(({
                                                                     src,
                                                                     cardSize,
                                                                     sliderHeader,
                                                                     sliderDescription,
                                                                 }, ref) => {
    const size = cardSizeVariants[cardSize];

    return (
        <button
            ref={ref}
            className={`${style.cardSetButton} ${size}`}
        >
            <img className={style.compositeImage} src={src} alt='' />
            <div className={style.compositeTextContainer}>
                <h2 className={style.compositeHeader}>{sliderHeader}</h2>
                <p className={style.compositeParagraph}>{sliderDescription}</p>
            </div>
        </button>
    );
});