import style from './Advertising-Card.module.scss';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { FC, forwardRef } from 'react';

export const AdvertisingCard: FC<AdvertisingImages> = forwardRef(({ src, cardSize }, ref) => {
    const cardSizeChoice = cardSize === 'small' ? style.smallCardSetButton : style.tallCardSetButton;

    return (
        <button ref={ref}
                className={`${style.cardSetButton} ${cardSizeChoice}`}
                style={{ backgroundImage: `url(${src})` }}
        />
    );
});