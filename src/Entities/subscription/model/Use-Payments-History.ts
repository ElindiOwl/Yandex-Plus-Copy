import { useEffect, useState } from 'react'

import { getChangePlanItems } from '../api/Get-Payments-History'

import { PaymentHistory } from './Payment-History-Types'


export const usePaymentsHistory = () => {
	const [paymentsHistory, setPaymentsHistory] = useState<PaymentHistory[]>([])

	useEffect(() => {
		const fetchPaymentsHistory = async () => {
			const paymentsHistoryDTO = await getChangePlanItems()
			setPaymentsHistory(paymentsHistoryDTO)
		}

		fetchPaymentsHistory()
	}, [])

	return paymentsHistory
}