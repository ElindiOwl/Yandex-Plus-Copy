export const getNominativeCaseMonth = (date: Date) => {
	const getNominativeCaseMonth = [
		'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
		'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',
	]
	return getNominativeCaseMonth[date.getMonth()]
}