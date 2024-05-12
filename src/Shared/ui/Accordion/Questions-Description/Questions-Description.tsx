import { FC } from 'react';
import { QuestionsTextProps } from 'src/Shared/lib/Questions/questions-Interface.ts';
import style from './Questions-Description.module.scss';


export const QuestionsDescription: FC<QuestionsTextProps> = ({ text }) => {
    return (
        <p className={style.questionDescription}>{text}</p>
    );
};