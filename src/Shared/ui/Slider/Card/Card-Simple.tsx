import style from './Card.module.scss';
import { FC, forwardRef } from 'react';
import { cardSizeVariants } from 'src/Shared/lib/Slider/card-Size-Variants.ts';
import { CardSliderTemplate } from 'src/Entities/advertising/model/CardSliderTemplate.ts';

export const CardSimple: FC<CardSliderTemplate> = forwardRef(({ src, cardSize = 'tall' }) => {
    const size = cardSizeVariants[cardSize];

    return (
        <button
            className={`${style.cardSetButton} ${size}`}
            style={{ backgroundImage: `url(${src})` }}
        />
    );
});