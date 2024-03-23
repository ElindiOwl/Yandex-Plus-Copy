import { paymentsHistoryDTO } from '../lib/paymentsHistoryDTO';
import { PaymentHistory } from '../model/paymentHistoryTypes';


export const getPaymentsHistory = async () => {

    return await new Promise<PaymentHistory[]>(function(resolve) {
        setTimeout(function() {
                resolve(paymentsHistoryDTO);
            },
            10);
    });

};

