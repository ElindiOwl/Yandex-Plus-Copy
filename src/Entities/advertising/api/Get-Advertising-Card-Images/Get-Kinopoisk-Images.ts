import { kinoImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/Kino-Card-Images';
import { CardSliderTemplate } from '../../model/CardSliderTemplate';

export const getKinopoiskImages = async () => {
    return await new Promise<CardSliderTemplate[]>(function(resolve) {
        setTimeout(function() {
            resolve(kinoImagesDTO);
        }, 10);
    });
};