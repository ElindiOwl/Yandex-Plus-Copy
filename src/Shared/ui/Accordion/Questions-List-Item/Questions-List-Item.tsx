import { QuestionsHeader } from 'src/Shared/ui/Accordion/Questions-Header/Questions-Header.tsx';
import { QuestionsDescription } from 'src/Shared/ui/Accordion/Questions-Description/Questions-Description.tsx';
import React, { FC, useState } from 'react';
import style from './Questions-List-Item.module.scss';

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
                className={`${style.questions__description} ${!isDescriptionVisible ? style.questions__description_invisible : ''}`}>
                <QuestionsDescription text={description} />
            </div>
            <hr />
        </div>
    );
};