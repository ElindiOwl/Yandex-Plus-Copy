import { useEffect, useState } from 'react';
import { CardSliderTemplate } from '../CardSliderTemplate';
import { getSpendPointsImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Spend-Points-Images';

export const useSpendPointsImages = () => {
    const [spendPointsImages, setSpendPointsImages] = useState<CardSliderTemplate[]>([]);

    useEffect(() => {
        const fetchSpendPointsImages = async () => {
            const spendPointsImagesDTO = await getSpendPointsImages();
            setSpendPointsImages(spendPointsImagesDTO);
        };

        fetchSpendPointsImages();
    }, []);

    return spendPointsImages;
};