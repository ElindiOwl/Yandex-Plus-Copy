import { FC } from 'react'
import { cn } from 'src/Shared/lib'

import style from './DropDown-Menu-Item.module.scss'

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
					alt='media'
					src={image}
				/>
				{description}
			</a>
		</div>
	)
}