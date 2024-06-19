import { FC } from 'react';
import { cn } from 'src/Shared/lib';
import { Link } from 'react-router-dom';

import style from './DropDown-Menu-Item.module.scss';

interface DropDownMenuItemProps {
    link: string;
    image: string;
    description: string;
    optionalClassName?: string;
}

export const DropDownMenuItem: FC<DropDownMenuItemProps> = ({ link, image, description, optionalClassName = '' }) => {
	return (
		<div className={cn([style.menuItem, optionalClassName])}>
			<Link to={link}>
				<img
					alt='media'
					src={image}
				/>
				{description}
			</Link>
		</div>
	);
};