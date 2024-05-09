import './SideBarApp.scss';
import SideBarActive
    from 'src/Widgets/Home-Page/ui/Home-Page-SideBar/SideBarComponents/Side-bar-active/SideBarActive.tsx';
import SideBarPlusPoints
    from 'src/Widgets/Home-Page/ui/Home-Page-SideBar/SideBarComponents/Side-bar-plus-points/SideBarPlusPoints.tsx';
import SideBarCashBack
    from 'src/Widgets/Home-Page/ui/Home-Page-SideBar/SideBarComponents/Side-bar-cashback/SideBarCashBack.tsx';
import SideBarPlusDaily
    from 'src/Widgets/Home-Page/ui/Home-Page-SideBar/SideBarComponents/Side-bar-plus-daily/SideBarPlusDaily.tsx';
import { useState } from 'react';

const SideBarApp = () => {
    const [parentZIndex, setParentZIndex] = useState('auto');

    return (
        <div className='sideBarDiv' style={{ zIndex: parentZIndex }}>
            <div className='sideBarDivForMobile'>
                <SideBarActive />
                <SideBarPlusPoints />
            </div>
            <SideBarCashBack setParentZIndex={setParentZIndex} />
            <SideBarPlusDaily />
        </div>
    );
};

export default SideBarApp;


