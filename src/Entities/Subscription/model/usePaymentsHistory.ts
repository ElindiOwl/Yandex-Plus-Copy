import { getPaymentsHistory } from '../api/getPaymentsHistory';
import { useEffect, useState } from 'react';
import { PaymentHistory } from './paymentHistoryTypes';


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