import { useEffect, useState } from 'react';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { getSpendPointsImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Spend-Points-Images';

export const useSpendPointsImages = () => {
    const [spendPointsImages, setSpendPointsImages] = useState<AdvertisingImages[]>([]);

    useEffect(() => {
        const fetchSpendPointsImages = async () => {
            const spendPointsImagesDTO = await getSpendPointsImages();
            setSpendPointsImages(spendPointsImagesDTO);
        };

        fetchSpendPointsImages();
    }, []);

    return spendPointsImages;
};