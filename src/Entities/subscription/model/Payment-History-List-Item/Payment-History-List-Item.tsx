import style from './Payment-History-List-Item.module.scss';
import { PaymentDataProps } from 'src/Entities/subscription/model/Payment-Data-Types.ts';

export const Payment = (paymentHistoryDataProps: PaymentDataProps) => {
    return (
        <div className={style.payment}>
            <img className={style.payment__image} src={paymentHistoryDataProps.img} alt='yandex plus' />
            <div className={style.payment__information}>
                <h5 className={style.payment__header}>{paymentHistoryDataProps.name}</h5>
                <h6 className={style.payment__description}>Списано {paymentHistoryDataProps.date}</h6>
            </div>
            <p className={style.payment__price}>-{paymentHistoryDataProps.price}₽</p>
        </div>
    );
};