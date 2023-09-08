import { createSlice } from "@reduxjs/toolkit";

type GroupIdType = string | undefined;

export interface AuthSliceState {
	user: any;
	token: string;
	groupId: GroupIdType;
}

const initialState: AuthSliceState = {
	user: null, // { name: "Admin" }
	token: localStorage.getItem("token") || "", // || "",
	groupId: "0" // byDefault Barcha guruhlar
};

const auth = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		setUser: (state: AuthSliceState, { payload }: any) => {
			state["user"] = payload;
		},
		setToken: (state: AuthSliceState, { payload }: any) => {
			state["token"] = payload;
		},
		setLogout: (state: AuthSliceState) => {
			state["user"] = null;
			state["token"] = "";
		},
		setGroupId: (state: AuthSliceState, { payload }: { payload: GroupIdType }) => {
			state["groupId"] = payload;
		}
	}
});

export const authState = auth.reducer;
export const { setToken, setLogout, setUser, setGroupId } = auth.actions;
