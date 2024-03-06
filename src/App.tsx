import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import SideBarApp from './Components/SideBar/Side-bar-app/SideBarApp';


function App() {

    return (
        <div className='finalDiv'>
            <Header className='headerApp' />
            <div className='containerApp'>
                <SideBarApp className='asideApp' />
                <Main className='mainApp' />
            </div>
            <div className='footerFinalDiv'>
                <Footer className='footerApp' />
            </div>
        </div>
    );
}

export default App;
