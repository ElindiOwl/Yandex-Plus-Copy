import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename='/Yandex-Plus-Copy'>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
