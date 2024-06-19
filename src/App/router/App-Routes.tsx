import { Route, Routes } from 'react-router';
import HomePage from 'src/Pages/homePage/Home-Page';
import SubscriptionControlPage from 'src/Pages/Subscription-Control-Page/Subscription-Control-Page.tsx';
import PaymentsHistoryPage
	from 'src/Pages/Payments-History-Page/Payments-History-Page.tsx';
import NotFoundPage from 'src/Pages/Not-Found-Page/Not-Found-Page';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<HomePage />} path='/' />
			<Route element={<SubscriptionControlPage />} path='/subControl' />
			<Route element={<PaymentsHistoryPage />} path='/subControlHistoryPage' />
			<Route element={<NotFoundPage />} path='*' />
		</Routes>
	);
};