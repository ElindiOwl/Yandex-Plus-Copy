import style from 'src/Shared/ui/Text-Header/Text-Header.module.scss'
import { FC, ReactNode } from 'react'

interface TextHeaderProps {
    header: string | ReactNode;
    description?: string;
}

export const TextHeader: FC<TextHeaderProps> = ({ header, description = '' }) => (
	<div className={style.cardText}>
		<h2 className={style.firstH}>{header}</h2>
		<p>{description}</p>
	</div>
)