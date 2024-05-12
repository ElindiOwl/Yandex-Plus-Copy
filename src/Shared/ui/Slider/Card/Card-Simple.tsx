import style from './Card.module.scss';
import { FC, forwardRef } from 'react';
import { cardSizeVariants } from 'src/Shared/lib/Slider/card-Size-Variants.ts';
import { CardSliderTemplate } from 'src/Entities/advertising/model/CardSliderTemplate.ts';

export const CardSimple: FC<CardSliderTemplate> = forwardRef(({ src, cardSize }, ref) => {
    const size = cardSizeVariants[cardSize];

    return (
        <button ref={ref}
                className={`${style.cardSetButton} ${size}`}
                style={{ backgroundImage: `url(${src})` }}
        />
    );
});