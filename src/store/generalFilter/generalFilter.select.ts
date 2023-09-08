import { DateObjType, IGeneralFilterSliceState } from "./generalFilter.slice";
import { createSelector } from "reselect";
import { AppState } from "store";

import { getSplitedDate } from "@/utils/date";

export const selectGeneralFilterState = (state: AppState) => state.generalFilterState;

export const selectDate = createSelector(selectGeneralFilterState, (generalFilterState: IGeneralFilterSliceState) => generalFilterState.date);

type SelectDateOptionType = {
	label: string;
	value: number;
	formatted: string;
} & ReturnType<typeof getSplitedDate>;

export const selectDateOption = createSelector(
	selectDate,
	(date: DateObjType): SelectDateOptionType => ({
		label: `${date.value} - ${date.version}`,
		value: date.id as number,
		formatted: String(date.value),
		...getSplitedDate(String(date.value))
	})
);

export const selectRegionOption = createSelector(selectGeneralFilterState, (generalFilterState: IGeneralFilterSliceState) => ({
	label: generalFilterState.ns10?.label,
	value: generalFilterState.ns10?.value?.toString()
}));

export const selectNs10Code = createSelector(selectRegionOption, (option) => option.value);

const selectExpandedFilterValues = (state: AppState) => state.generalFilterState.expandedFiltersValues;

export const getSelectedExpandedFilterValues = (key: string) => {
	return createSelector(selectExpandedFilterValues, (formValues: IGeneralFilterSliceState["expandedFiltersValues"]) => formValues[key]);
};

export const getSelectedExpandedFilterFormValuesFormatted = <T extends (values: any) => void>(cb: T, pathname: string) => {
	return createSelector(selectExpandedFilterValues, (formValues: IGeneralFilterSliceState["expandedFiltersValues"]) => cb(formValues[pathname]));
};
