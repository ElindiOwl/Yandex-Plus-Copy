import Header from '../../Shared/Header/Header';
import SideBarApp from './Components/SideBar/Side-bar-app/SideBarApp';
import Main from './Components/Main/Main';
import Footer from '../../Shared/Footer/Footer';
import './MainPage.scss';

function MainPage() {

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

export default MainPage;