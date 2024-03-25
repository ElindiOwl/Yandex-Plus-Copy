import { Route, Routes } from 'react-router';
import HomePage from 'src/Pages/homePage/homePage';
import SubscriptionControlPage from 'src/Pages/subscriptionPage/SubscriptionControlPage';
import SubscriptionControlHistoryPage
    from 'src/Pages/subscriptionPage/Components/Main/MainComponents/SubscriptionPayment/SubscriptionPaymentOptions/PaymentHistorySubscriptionPaymentOption/SubscriptionControlHistoryPage/SubscriptionControlHistoryPage';
import NotFoundPage from 'src/Pages/errorPage/NotFoundPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/subControl' element={<SubscriptionControlPage />} />
            <Route path='/subControlHistoryPage' element={<SubscriptionControlHistoryPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
};