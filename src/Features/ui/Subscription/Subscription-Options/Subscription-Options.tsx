import React, { useState } from 'react'
import './Subscription-Options.scss'
import { usePaymentsHistory } from 'src/Entities/subscription/model/Use-Payments-History.ts'
import SubscriptionHeader from 'src/Entities/subscription/ui/Subscription-Header/Subscription-Header.tsx'
import { getMonth } from 'src/Shared/lib/getMonth.tsx'
import ChangePlan
	from 'src/Features/ui/Subscription/Change-Plan/Change-Plan.tsx'
import PaymentHistoryPaymentOption
	from 'src/Features/ui/Subscription/Payment-History/Payment-History.tsx'
import PaymentMethod
	from 'src/Features/ui/Subscription/Payment-Method/Payment-Method.tsx'

interface NextPaymentMapProps {
    displayCount?: number;
    option?: string;
}

const SubscriptionOptions: React.FC<NextPaymentMapProps> = ({ displayCount, option }) => {
	const [activeOption, setActiveOption] = useState(option || 'changePlan')

	const handleToggleOption = (option: string) => {
		setActiveOption(activeOption === option ? '' : option)
	}

	const nextPaymentInfo = usePaymentsHistory()

	const limitedPayments = displayCount ? nextPaymentInfo.slice(0, displayCount) : nextPaymentInfo

	return (
		limitedPayments.map((payment, index) => {
			const paymentDate = new Date(payment.paymentDate)
			paymentDate.setMonth(paymentDate.getMonth() + 1)
			const formattedDate = `${paymentDate.getDate()} ${getMonth(paymentDate)}`

			return (
				<div>
					<div key={index} className='subPaymentDivSubControl'>
						<div>
							<SubscriptionHeader
								date={formattedDate}
								price={payment.subscriptionPrice}
							/>
							<div className='buttonsSubPaymentsControl'>
								<button
									className={activeOption === 'changePlan' ? 'activeButton' : 'inactiveButton'}
									onClick={() => handleToggleOption('changePlan')}
								>
                                    Сменить план
								</button>
								<button
									className={activeOption === 'paymentHistory' ? 'activeButton' : 'inactiveButton'}
									onClick={() => handleToggleOption('paymentHistory')}
								>
                                    История списаний
								</button>
								<button
									className={activeOption === 'paymentMethod' ? 'activeButton' : 'inactiveButton'}
									onClick={() => handleToggleOption('paymentMethod')}
								>
                                    Способ оплаты
								</button>
							</div>
						</div>
					</div>
					<div
						className={`subPaymentOption ${activeOption === 'changePlan' ? 'changePlanItem__majorTag' : ''}`}>
						{activeOption === 'changePlan' && <ChangePlan />}
					</div>
					<div
						className={`subPaymentOption ${activeOption === 'paymentHistory' ? 'changePlanItem__majorTag' : ''}`}>
						{activeOption === 'paymentHistory' && <PaymentHistoryPaymentOption />}
					</div>
					<div
						className={`subPaymentOption ${activeOption === 'paymentMethod' ? 'changePlanItem__majorTag' : ''}`}>
						{activeOption === 'paymentMethod' && <PaymentMethod />}
					</div>
				</div>
			)
		})
	)
}

export default SubscriptionOptions