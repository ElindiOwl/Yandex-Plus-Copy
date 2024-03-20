import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from './Pages/MainPage/MainPage';
import SubscriptionControlPage from './Pages/SubscriptionControlPage/SubscriptionControlPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import SubControlHistoryPage
    from './Pages/SubscriptionControlPage/Components/Main/MainComponents/SubPayment/SubPaymentOptions/PaymentHistorySubPaymentOption/SubControlHistoryPage/SubControlHistoryPage';


function App() {

    return (
        <div id='app'>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/subControl' element={<SubscriptionControlPage />} />
                <Route path='/subControlHistoryPage' element={<SubControlHistoryPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;