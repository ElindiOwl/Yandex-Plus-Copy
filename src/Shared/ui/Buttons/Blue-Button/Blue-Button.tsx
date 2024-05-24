import { ButtonsInterface } from 'src/Shared/lib/buttons-interface.ts'
import { FC } from 'react'

import style from './Blue-Button.module.scss'

export const BlueButton: FC<ButtonsInterface> = ({ text }) => {
	return (
		<button className={style.blueButton}>{text}</button>
	)
}