import { createSlice } from "@reduxjs/toolkit";

type TableModeType = "initial" | "updating" | "checking" | "done";

export interface ICommonSliceState {
	nameByNameMode: TableModeType;
	openMenu: boolean;
	activeTab: number;
	isConnectedWebSocket: boolean;
}

const initialState: ICommonSliceState = {
	nameByNameMode: "initial",
	openMenu: false,
	activeTab: 1,
	isConnectedWebSocket: false
};

const common = createSlice({
	name: "common",
	initialState: initialState,
	reducers: {
		setNameByNameMode: (state: ICommonSliceState, { payload }: any) => {
			state["nameByNameMode"] = payload.value;
		},
		openMenu: (state: ICommonSliceState, { payload }: any) => {
			state["openMenu"] = payload;
		},
		setActiveTab: (state: ICommonSliceState, { payload }: any) => {
			state["activeTab"] = payload;
		},
		setIsConnectedWebSocket: (state: ICommonSliceState, { payload }: { payload: boolean }) => {
			state["isConnectedWebSocket"] = payload;
		}
	}
});

export const commonState = common.reducer;
export const { setNameByNameMode, openMenu, setActiveTab, setIsConnectedWebSocket } = common.actions;
// export default common.reducer
