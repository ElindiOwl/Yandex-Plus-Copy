import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { yandexMusicImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Images/Music-Card-Images';

export const getYandexMusicImages = async () => {
    return await new Promise<AdvertisingImages[]>(function(resolve) {
        setTimeout(function() {
            resolve(yandexMusicImagesDTO);
        }, 10);
    });
};