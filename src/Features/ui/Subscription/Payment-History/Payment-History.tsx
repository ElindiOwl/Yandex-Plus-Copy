import './Payment-History.scss';
import PaymentsHistoryMap from 'src/Entities/subscription/ui/Payments-History-Map/Payments-History-Map.tsx';
import { Link } from 'react-router-dom';

const PaymentHistoryPaymentOption = () => {

	return (
		<div className='paymentHistorySubPayment'>
			<h2>История списаний</h2>
			<PaymentsHistoryMap displayCount={3} showDateHolder={false} />
			<Link to='/subControlHistoryPage'>Посмотреть списания за полгода</Link>
		</div>
	);
};

export default PaymentHistoryPaymentOption;