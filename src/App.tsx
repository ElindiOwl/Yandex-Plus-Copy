import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import SideBarApp from './Components/SideBar/Side-bar-app/SideBarApp';


function App() {

    return (
        <div className='finalDiv'>
            <Header />
            <div className='containerApp'>
                <SideBarApp />
                <Main />
            </div>
            <div className='footerFinalDiv'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
