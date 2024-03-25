import { KinoImagesDTO } from 'src/Entities/advertising/lib/Kino-Card-Images';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';

export const getKinopoiskImages = async () => {
    return await new Promise<AdvertisingImages[]>(function(resolve) {
        setTimeout(function() {
            resolve(KinoImagesDTO);
        }, 10);
    });
};