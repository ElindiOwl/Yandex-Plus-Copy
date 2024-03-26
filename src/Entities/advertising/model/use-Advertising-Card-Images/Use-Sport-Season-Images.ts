import { useEffect, useState } from 'react';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { getSportSeasonImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Sport-Season-Images';

export const useSportSeasonImages = () => {
    const [sportSeasonImages, setSportSeasonImages] = useState<AdvertisingImages[]>([]);

    useEffect(() => {
        const fetchSportSeasonImages = async () => {
            const sportSeasonImagesDTO = await getSportSeasonImages();
            setSportSeasonImages(sportSeasonImagesDTO);
        };

        fetchSportSeasonImages()
    }, []);

    return sportSeasonImages;
}