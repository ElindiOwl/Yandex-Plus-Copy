import { useEffect, useState } from 'react';
import { AdvertisingImages } from 'src/Entities/advertising/model/Advertising-Card-Images-Types';
import { getGetPointsImages } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-GetPoints-Images';

export const useGetPointsImages = () => {
    const [getPointsImages, setGetPointsImages] = useState<AdvertisingImages[]>([]);

    useEffect(() => {
        const fetchGetPointsImages = async () => {
            const getPointsImagesDTO = await getGetPointsImages();
            setGetPointsImages(getPointsImagesDTO);
        };

        fetchGetPointsImages();
    }, []);

    return getPointsImages;
};