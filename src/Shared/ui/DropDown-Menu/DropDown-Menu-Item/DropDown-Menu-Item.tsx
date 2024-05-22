import style from './DropDown-Menu-Item.module.scss';
import { FC } from 'react';
import { cn } from 'src/Shared/lib';

interface DropDownMenuItemProps {
    link: string;
    image: string;
    description: string;
    optionalClassName?: string;
}

export const DropDownMenuItem: FC<DropDownMenuItemProps> = ({ link, image, description, optionalClassName = '' }) => {
    return (
        <div className={cn([style.menuItem, optionalClassName])}>
            <a href={link}>
                <img
                    src={image}
                    alt='media'
                />
                {description}
            </a>
        </div>
    );
};