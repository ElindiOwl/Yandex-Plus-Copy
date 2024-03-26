import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import payCard from 'src/Shared/assets/Images/Home-Page-Advertising/CashBack-Points-Card-Images/PayCard.png';
import payApp from 'src/Shared/assets/Images/Home-Page-Advertising/CashBack-Points-Card-Images/PayApp.png';
import plusDaily from 'src/Shared/assets/Images/Home-Page-Advertising/CashBack-Points-Card-Images/PlusDaily.png';
import plusCity from 'src/Shared/assets/Images/Home-Page-Advertising/CashBack-Points-Card-Images/PlusCity.png';

export const getPointsCardImagesDTO: AdvertisingImages[] = [
    {
        src: payCard,
    },
    {
        src: payApp,
    },
    {
        src: plusDaily,
    },
    {
        src: plusCity,
    },
];