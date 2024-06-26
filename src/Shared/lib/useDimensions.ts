import { RefObject, useMemo, useSyncExternalStore } from 'react'

const subscribe: (callback: () => void) => () => void = (callback) => {
	window.addEventListener('resize', callback)
	return () => {
		window.removeEventListener('resize', callback)
	}
}

const useDimensions = (ref: RefObject<HTMLElement>): { width: number; height: number } => {
	const dimensions = useSyncExternalStore(
		subscribe,
		() => JSON.stringify({
			height: ref.current?.offsetHeight ?? 0,
			width: ref.current?.offsetWidth ?? 0,
		}),
	)
	return useMemo(() => JSON.parse(dimensions), [dimensions])
}

export { useDimensions }