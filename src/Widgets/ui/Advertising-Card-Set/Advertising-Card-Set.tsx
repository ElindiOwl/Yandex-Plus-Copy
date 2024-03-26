import AdvertisingCardTemplate from 'src/Widgets/ui/Advertising-Card-Template';
import {
    useSportSeasonImages,
} from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Sport-Season-Images';
import { SportSeasonCardHeader } from 'src/Entities/advertising/ui/Advertising-Card-Headers/Sport-Season-Card-Header';
import NewInPlusCard from 'src/Widgets/ui/Home-Page-Main/Main-Components/NewInPlusCard/NewInPlusCard';
import KinoAndMusicCard from 'src/Widgets/ui/Home-Page-Main/Main-Components/Kino-And-Music-Card/Kino-And-Music-Card';
import CashBackCard from 'src/Widgets/ui/Home-Page-Main/Main-Components/CashBackCard/CashBackCard';
import { usePlusIdeasImages } from 'src/Entities/advertising/model/use-Advertising-Card-Images/Use-Plus-Ideas-Images';
import { PlusIdeasCardHeader } from 'src/Entities/advertising/ui/Advertising-Card-Headers/Plus-Ideas-Card-Header';

export const AdvertisingCardSet = () => {
    return (
        <>
            <AdvertisingCardTemplate cardImagesFunction={useSportSeasonImages} cardSize={'tall'}
                                     cardHeaderText={SportSeasonCardHeader} itemsToSlide={1} />
            <AdvertisingCardTemplate cardImagesFunction={usePlusIdeasImages} cardSize={'tall'}
                                     cardHeaderText={PlusIdeasCardHeader} itemsToSlide={1} />
            <NewInPlusCard />
            <KinoAndMusicCard />
            <CashBackCard />
        </>
    );
};