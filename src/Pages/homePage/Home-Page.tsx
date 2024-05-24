import { Wrapper } from 'src/Shared/ui/Wrapper/Wrapper';
import SideBarApp from 'src/Widgets/Home-Page/ui/Home-Page-SideBar/Side-bar-app/SideBarApp';
import CardSetContainerDesign from 'src/Shared/ui/Card-Slider/Card-Set-Container-Design/Card-Set-Container-Design';

const HomePage = () => (
	<Wrapper>
		<SideBarApp />
		<CardSetContainerDesign />
	</Wrapper>
);

export default HomePage;