import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { spendPointsCardImages } from 'src/Entities/advertising/lib/Card-Set-Images/Spend-Points-Card-Images';

export const getSpendPointsImages = async () => {
    return await new Promise<AdvertisingImages[]>(function(resolve) {
        setTimeout(function() {
            resolve(spendPointsCardImages);
        }, 10);
    });
};