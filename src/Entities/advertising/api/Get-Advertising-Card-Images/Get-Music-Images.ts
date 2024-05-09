import { CardSliderTemplate } from '../../model/CardSliderTemplate';
import { yandexMusicImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/Music-Card-Images';

export const getYandexMusicImages = async () => {
    return await new Promise<CardSliderTemplate[]>(function(resolve) {
        setTimeout(function() {
            resolve(yandexMusicImagesDTO);
        }, 10);
    });
};