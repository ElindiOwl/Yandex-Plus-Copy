import { PaymentDataProps } from 'src/Entities/subscription/model/Payment-Data-Types.ts'

import style from './Payment-History-List-Item.module.scss'

export const Payment = (paymentHistoryDataProps: PaymentDataProps) => {
	return (
		<div className={style.payment}>
			<img alt='yandex plus' className={style.payment__image} src={paymentHistoryDataProps.img} />
			<div className={style.payment__information}>
				<h5 className={style.payment__header}>{paymentHistoryDataProps.name}</h5>
				<h6 className={style.payment__description}>Списано {paymentHistoryDataProps.date}</h6>
			</div>
			<p className={style.payment__price}>-{paymentHistoryDataProps.price}₽</p>
		</div>
	)
}