import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Aside from './Components/SideBar/Aside';


function App() {

    return (
        <div>
            <Header className='Header' />
            <div className='Container'>
                <Aside className='Aside' />
                <Main className='Main' />
            </div>
        </div>
    );
}

export default App;
