import { QuestionsHeader } from 'src/Entities/questions/ui/Questions-Header/Questions-Header.tsx';
import { QuestionsDescription } from 'src/Entities/questions/ui/Questions-Description/Questions-Description.tsx';
import React, { FC, useState } from 'react';
import style from './Questions-List-Item.module.scss';
import { cn } from 'src/Shared/lib';

export interface QuestionsListProps {
    header: string;
    description: React.ReactNode;
}

export const QuestionsListItem: FC<QuestionsListProps> = ({ header, description }) => {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const headerClickHandler = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <div className={style.questions}>
            <QuestionsHeader text={header} onClick={headerClickHandler} />
            <div
                // className={`${style.questions__description} ${!isDescriptionVisible ? style.questions__description_invisible : ''}`}>
                className={cn([style.questions__description], { [style.questions__description_invisible]: !isDescriptionVisible })}>
                <QuestionsDescription text={description} />
            </div>
        </div>
    );
};