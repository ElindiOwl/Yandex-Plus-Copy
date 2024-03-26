import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { sportSeasonCardImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Images/Sport-Season-Card-Images';

export const getSportSeasonImages = async () => {
    return await new Promise<AdvertisingImages[]>(function(resolve) {
            setTimeout(function() {
                resolve(sportSeasonCardImagesDTO);
            }, 10);
        },
    );
};