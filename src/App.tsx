import './App.css';
import { AppRoutes } from 'src/App/router/App-Routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
	return (
		<div id='app'>
			<BrowserRouter basename='/Yandex-Plus-Copy'>
				<AppRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
