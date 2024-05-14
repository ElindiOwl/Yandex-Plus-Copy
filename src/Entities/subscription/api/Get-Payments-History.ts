import { paymentsHistoryDTO } from '../lib/payments-History-DTO.ts';
import { PaymentHistory } from '../model/Payment-History-Types';


export const getChangePlanItems = async () => {

    return await new Promise<PaymentHistory[]>(function(resolve) {
        setTimeout(function() {
                resolve(paymentsHistoryDTO);
            },
            10);
    });

};

