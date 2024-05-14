export type CHANGE_PLAN_TYPE = 'month' | 'year';

export interface ChangePlanItems {
    type: CHANGE_PLAN_TYPE;
    header: string;
    description: string;
    isActive: boolean;
    discount: string;
}