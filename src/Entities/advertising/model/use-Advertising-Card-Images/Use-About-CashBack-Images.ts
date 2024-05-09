import { useEffect, useState } from 'react';
import { CardSliderTemplate } from '../CardSliderTemplate';
import {
    getAboutCashBackImages,
} from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-About-CashBack-Images';

export const useAboutCashBackImages = () => {
    const [aboutCashBackImages, setAboutCashBackImages] = useState<CardSliderTemplate[]>([]);

    useEffect(() => {
        const fetchAboutCashBackImages = async () => {
            const aboutCashBackCardImagesDTO = await getAboutCashBackImages();
            setAboutCashBackImages(aboutCashBackCardImagesDTO);
        };

        fetchAboutCashBackImages();
    }, []);

    return aboutCashBackImages;
};