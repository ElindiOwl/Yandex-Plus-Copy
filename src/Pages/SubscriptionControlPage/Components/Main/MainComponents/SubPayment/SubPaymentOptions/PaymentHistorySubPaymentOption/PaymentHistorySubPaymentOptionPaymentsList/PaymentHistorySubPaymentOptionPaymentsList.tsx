import './PaymentHistorySubPaymentOptionPaymentsList.scss';

const Payment = (paymentHistoryDataProps) => {
    return (
        <div className='paymentHistoryIndividualDiv'>
            <img src={paymentHistoryDataProps.img} alt='yandex plus' />
            <h5>{paymentHistoryDataProps.name}</h5>
            <h6>Списано {paymentHistoryDataProps.date}</h6>
            <p>-{paymentHistoryDataProps.price}₽</p>
        </div>
    );
};

export default Payment;