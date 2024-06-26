import { Squash as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import { DropDownMenu } from 'src/Features/ui/Header/Header-Menu/DropDown-Menu/DropDown-Menu.tsx'

import style from './Header-Menu.module.scss'

export const HeaderMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const toggleRef = useRef<HTMLDivElement>(null)

	const toggleMenu = () => {
		setIsMenuOpen(prev => !prev)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const dropDownElement = document.getElementById('dropdownMenu')
			if (
				menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                dropDownElement &&
                !dropDownElement.contains(event.target as Node)
			) {
				setIsMenuOpen(false)
			}
		}

		if (isMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isMenuOpen])

	return (
		<div ref={menuRef} className={style.headerMenu}>
			<div ref={toggleRef} className={style.headerMenu__menuToggle} onClick={toggleMenu}>
				<Hamburger size={20} toggled={isMenuOpen} />
				<h5 className={style.headerMenu__menuWord}>Меню</h5>
			</div>
			{isMenuOpen && (
				<DropDownMenu toggleRef={toggleRef} onClick={toggleMenu} />
			)}
		</div>
	)
}
