import { useEffect, useState } from 'react';
import { getNewInPlusData } from 'src/Entities/advertising/api/Get-Advertising-Card-Images/Get-New-In-Plus-Data';
import { CardSliderTemplate } from '../CardSliderTemplate';

export const useNewInPlusData = () => {
    const [newInPlusData, setNewInPlusData] = useState<CardSliderTemplate[]>([]);

    useEffect(() => {
        const fetchNewInPlusData = async () => {
            const newInPlusDataDTO = await getNewInPlusData();
            setNewInPlusData(newInPlusDataDTO);
        };

        fetchNewInPlusData();
    }, []);

    return newInPlusData;
};