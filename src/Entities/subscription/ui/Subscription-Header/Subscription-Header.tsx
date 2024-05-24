import './Subscription-Header.scss'
import { PaymentDataProps } from 'src/Entities/subscription/model/Payment-Data-Types.ts'

const SubscriptionHeader = (NextPaymentInTextAreaDataProps: PaymentDataProps) => {
	return (
		<div className='textAreaSubPayment'>
			<h5>{NextPaymentInTextAreaDataProps.price} ₽</h5>
			<p>Спишется {NextPaymentInTextAreaDataProps.date}</p>
		</div>
	)
}

export default SubscriptionHeader