import './Payment-Option-Item.scss'
import { PaymentDataProps } from 'src/Entities/subscription/model/Payment-Data-Types.ts'

const NextPaymentInfo = (nextPaymentDataProps: PaymentDataProps) => {
	return (
		<div className='nextPaymentInfo'>
			<img alt='yandex plus' src={nextPaymentDataProps.img} />
			<h5>{nextPaymentDataProps.name}</h5>
			<p>{nextPaymentDataProps.price} ₽</p>
		</div>
	)
}

export default NextPaymentInfo