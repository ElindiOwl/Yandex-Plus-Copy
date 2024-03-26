import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { AboutCashBackCardImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Images/About-CashBack-Card-Images';

export const getAboutCashBackImages = async () => {
    return await new Promise<AdvertisingImages[]>(function(resolve) {
        setTimeout(function() {
            resolve(AboutCashBackCardImagesDTO);
        }, 10);
    });
};