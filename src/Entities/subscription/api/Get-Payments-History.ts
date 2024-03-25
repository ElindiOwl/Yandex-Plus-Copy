import { paymentsHistoryDTO } from '../lib/Payments-History-DTO';
import { PaymentHistory } from '../model/Payment-History-Types';


export const getPaymentsHistory = async () => {

    return await new Promise<PaymentHistory[]>(function(resolve) {
        setTimeout(function() {
                resolve(paymentsHistoryDTO);
            },
            10);
    });

};

