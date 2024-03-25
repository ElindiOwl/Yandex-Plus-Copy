import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { plusIdeasImagesDTO } from 'src/Entities/advertising/lib/Plus-Ideas-Card-Images';

export const getPlusIdeasImages = async () => {
    return await new Promise<AdvertisingImages[]>(function(resolve) {
        setTimeout(function() {
            resolve(plusIdeasImagesDTO);
        }, 10);
    });
};