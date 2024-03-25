import './SideBarApp.scss';
import SideBarActive from '../SideBarComponents/Side-bar-active/SideBarActive';
import SideBarPlusPoints from '../SideBarComponents/Side-bar-plus-points/SideBarPlusPoints';
import SideBarCashBack from '../SideBarComponents/Side-bar-cashback/SideBarCashBack';
import SideBarPlusDaily from '../SideBarComponents/Side-bar-plus-daily/SideBarPlusDaily';
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


