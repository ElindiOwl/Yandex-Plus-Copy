import { getPaymentsHistory } from '../api/Get-Payments-History';
import { useEffect, useState } from 'react';
import { PaymentHistory } from './Payment-History-Types';


export const usePaymentsHistory = () => {
    const [paymentsHistory, setPaymentsHistory] = useState<PaymentHistory[]>([]);

    useEffect(() => {
        const fetchPaymentsHistory = async () => {
            const paymentsHistoryDTO = await getPaymentsHistory();
            setPaymentsHistory(paymentsHistoryDTO);
        };

        fetchPaymentsHistory();
    }, []);

    return paymentsHistory;
};