import { Wrapper } from 'src/Shared/ui/Wrapper/Wrapper';
import SideBarApp from 'src/Widgets/ui/Home-Page-SideBar/Side-bar-app/SideBarApp';
import Main from 'src/Widgets/ui/Home-Page-Main/Main';

function HomePage() {

    return (
        <Wrapper>
            <SideBarApp />
            <Main />
        </Wrapper>
    );
}

export default HomePage;