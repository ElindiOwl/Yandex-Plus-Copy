import Header from 'src/Widgets/header/Header'
import Footer from 'src/Widgets/footer/Footer'
import { FC, ReactNode } from 'react'

import styles from './Wrapper.module.scss'

interface WrapperProps {
    children: ReactNode;
}


export const Wrapper: FC<WrapperProps> = ({ children }) => {
	return (
		<div>
			<Header /> {/*исправить классы и разбить на компоненты*/}
			<div className={styles.containerApp}>
				{children}
			</div>
			<div className={styles.footerFinalDiv}>
				<Footer /> {/*разбить на компоненты и исправить классы*/}
			</div>
		</div>
	)
}