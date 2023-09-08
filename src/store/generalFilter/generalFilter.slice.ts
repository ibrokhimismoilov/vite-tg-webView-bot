import { createSlice } from "@reduxjs/toolkit";

export type DateObjType = {
	value: Date | null;
	id: number | null;
	version: number | null;
};

export interface IGeneralFilterSliceState {
	date: DateObjType;
	expandedFiltersValues: Record<string, any>;
	ns10: any;
}

type DateTypeKeys = "date";

const initialState: IGeneralFilterSliceState = {
	date: {
		value: null,
		id: null,
		version: null
	},
	expandedFiltersValues: {},
	ns10: null
};

const generalFilter = createSlice({
	name: "generalFilter",
	initialState: initialState,
	reducers: {
		setDate: (state: IGeneralFilterSliceState, { payload }: any) => {
			for (const [key, value] of Object.entries(payload)) {
				if (value) {
					state[key as DateTypeKeys] = value as DateObjType;
				}
			}
		},
		setValueGeneralFilter(state: IGeneralFilterSliceState, { payload }: any) {
			state[payload.key as keyof IGeneralFilterSliceState] = payload.value;
		},
		setExpandedFilter: (state: IGeneralFilterSliceState, { payload: { key, values } }: any) => {
			state.expandedFiltersValues[key] = values;
		}
	}
});

export const generalFilterState = generalFilter.reducer;

export const { setDate, setExpandedFilter, setValueGeneralFilter } = generalFilter.actions;
