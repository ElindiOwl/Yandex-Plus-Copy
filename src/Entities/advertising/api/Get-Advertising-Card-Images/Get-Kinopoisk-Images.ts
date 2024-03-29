import { kinoImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Images/Kino-Card-Images';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';

export const getKinopoiskImages = async () => {
    return await new Promise<AdvertisingImages[]>(function(resolve) {
        setTimeout(function() {
            resolve(kinoImagesDTO);
        }, 10);
    });
};