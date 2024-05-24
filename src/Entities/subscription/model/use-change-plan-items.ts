import { useEffect, useState } from 'react'
import { getChangePlanItems } from 'src/Entities/subscription/api/get-change-plan-items.ts'
import { ChangePlanItems } from 'src/Entities/subscription/model/change-plan-items-types.ts'

export const useChangePlanItems = () => {
	const [changePlanItems, setChangePlanItems] = useState<ChangePlanItems[]>([])

	useEffect(() => {
		const fetchChangePlanItems = async () => {
			const changePlanItemsDTO = await getChangePlanItems()
			setChangePlanItems(changePlanItemsDTO)
		}

		fetchChangePlanItems()
	}, [])

	return changePlanItems
}