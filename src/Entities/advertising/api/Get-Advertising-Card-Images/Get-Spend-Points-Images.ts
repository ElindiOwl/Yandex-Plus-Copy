import { CardSliderTemplate } from '../../model/CardSliderTemplate';
import { spendPointsCardImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/Spend-Points-Card-Images';

export const getSpendPointsImages = async () => {
    return await new Promise<CardSliderTemplate[]>(function(resolve) {
        setTimeout(function() {
            resolve(spendPointsCardImagesDTO);
        }, 10);
    });
};