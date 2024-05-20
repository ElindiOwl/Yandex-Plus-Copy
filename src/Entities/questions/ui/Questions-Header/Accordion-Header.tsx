import { FC, useState } from 'react';
import { AccordionTextProps } from 'src/Shared/lib/accordion-Interface.ts';
import style from './Accordion-Header.module.scss';
import { cn } from 'src/Shared/lib';

interface AccordionHeaderProps extends AccordionTextProps {
    onClick: () => void;
    isHoverEffect: boolean;
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({ text, onClick, isHoverEffect }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
        onClick();
    };

    return (
        <div className={cn([style.headerContainer], { [style.headerContainer_hoverEffect]: isHoverEffect })}
             onClick={handleClick}>
            <p>{text}</p>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 8' fill='none' stroke='currentColor'
                 className={`${style.expand__title_arrow} ${isExpanded ? style.rotated : ''}`} width='15'
                 height='11' strokeWidth='1.5'>
                <path d='M1 1L6.85858 6.85858C6.93668 6.93668 7.06332 6.93668 7.14142 6.85858L13 1'></path>
            </svg>
        </div>
    );
};