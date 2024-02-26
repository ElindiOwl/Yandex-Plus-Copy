import './SideBarApp.scss';
import SideBarActive from '../SideBarComponents/Side-bar-active/SideBarActive';
import SideBarPlusPoints from '../SideBarComponents/Side-bar-plus-points/SideBarPlusPoints';
import SideBarCashBack from '../SideBarComponents/Side-bar-cashback/SideBarCashBack';
import SideBarPlusDaily from '../SideBarComponents/Side-bar-plus-daily/SideBarPlusDaily';

const SideBarApp = () => {
    return (
        <>
            <SideBarActive />
            <SideBarPlusPoints />
            <SideBarCashBack />
            <SideBarPlusDaily />
        </>
    );
};

export default SideBarApp;


