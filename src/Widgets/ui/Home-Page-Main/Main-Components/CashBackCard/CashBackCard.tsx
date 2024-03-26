import './CashBackCard.scss';
import AdvertisingCardTemplate from 'src/Widgets/ui/Advertising-Card-Template';
import {
    AboutCashBackCardHeader,
} from 'src/Entities/advertising/ui/Advertising-Card-Headers/About-CashBack-Card-Header';
import {
    CashBackPointsCardHeader,
} from 'src/Entities/advertising/ui/Advertising-Card-Headers/CashBack-Points-Card-Header';
import { SpendPointsCardHeader } from 'src/Entities/advertising/ui/Advertising-Card-Headers/Spend-Points-Card-Header';
import {
    useAboutCashBackImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-About-CashBack-Images';
import { useGetPointsImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-GetPoints-Images';
import {
    useSpendPointsImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Spend-Points-Images';

const CashBackCard = () => {
    return (
        <div className='PointsCardDiv'>
            <AdvertisingCardTemplate cardImagesFunction={useAboutCashBackImages} cardSize={'tall'}
                                     cardHeaderText={AboutCashBackCardHeader} itemsToSlide={2} />
            <AdvertisingCardTemplate cardImagesFunction={useGetPointsImages} cardSize={'small'}
                                     cardHeaderText={CashBackPointsCardHeader} itemsToSlide={0} />
            <AdvertisingCardTemplate cardImagesFunction={useSpendPointsImages} cardSize={'tall'}
                                     cardHeaderText={SpendPointsCardHeader} itemsToSlide={3} />
        </div>
    );
};

export default CashBackCard;