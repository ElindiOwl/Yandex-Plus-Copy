import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { getPointsCardImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Images/Get-Points-Card-Images';

export const getGetPointsImages = async () => {
    return await new Promise<AdvertisingImages[]>(function(resolve) {
        setTimeout(function() {
            resolve(getPointsCardImagesDTO);
        }, 10);
    });
};