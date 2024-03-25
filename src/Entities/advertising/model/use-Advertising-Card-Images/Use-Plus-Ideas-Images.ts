import { useEffect, useState } from 'react';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { getPlusIdeasImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-Plus-Ideas-Images';

export const usePlusIdeasImages = () => {
    const [plusIdeasImages, setPlusIdeasImages] = useState<AdvertisingImages[]>([]);

    useEffect(() => {
        const fetchPlusIdeasImages = async () => {
            const plusIdeasCardImagesDTO = await getPlusIdeasImages();
            setPlusIdeasImages(plusIdeasCardImagesDTO);
        };

        fetchPlusIdeasImages();
    }, []);

    return plusIdeasImages;
};