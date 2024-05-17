import { FC } from 'react';
import { AccordionTextProps } from 'src/Shared/lib/accordion-Interface.ts';
import style from './Accordion-Description.module.scss';


export const AccordionDescription: FC<AccordionTextProps> = ({ text }) => {
    return (
        <p className={style.accordionDescription}>{text}</p>
    );
};