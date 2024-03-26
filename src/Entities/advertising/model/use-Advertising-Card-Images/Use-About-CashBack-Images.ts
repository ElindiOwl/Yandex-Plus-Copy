import { useEffect, useState } from 'react';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import {
    getAboutCashBackImages,
} from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-About-CashBack-Images';

export const useAboutCashBackImages = () => {
    const [aboutCashBackImages, setAboutCashBackImages] = useState<AdvertisingImages[]>([]);

    useEffect(() => {
        const fetchAboutCashBackImages = async () => {
            const aboutCashBackCardImagesDTO = await getAboutCashBackImages();
            setAboutCashBackImages(aboutCashBackCardImagesDTO);
        };

        fetchAboutCashBackImages();
    }, []);

    return aboutCashBackImages;
};