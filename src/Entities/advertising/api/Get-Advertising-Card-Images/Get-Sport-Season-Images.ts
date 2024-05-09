import { CardSliderTemplate } from '../../model/CardSliderTemplate';
import { sportSeasonCardImagesDTO } from 'src/Entities/advertising/lib/Card-Set-Slider/Sport-Season-Card-Images';

export const getSportSeasonImages = async () => {
    return await new Promise<CardSliderTemplate[]>(function(resolve) {
            setTimeout(function() {
                resolve(sportSeasonCardImagesDTO);
            }, 500);
        },
    );
};