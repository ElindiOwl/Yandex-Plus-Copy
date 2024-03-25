import style from './AdvertisingCard.module.scss';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { FC, forwardRef } from 'react';

export const AdvertisingCard: FC<AdvertisingImages> = forwardRef(({ src }, ref) => {
    return (
        <button ref={ref} className={style.cardSetButton} style={{ backgroundImage: `url(${src})` }}></button>
    );
});