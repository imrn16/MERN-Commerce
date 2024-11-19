import { createSlice } from "@reduxjs/toolkit";

const naviSlice = createSlice({
	name: "navi",
	initialState: {
		value: false,
	},
	reducers: {
		naviState: (state) => {
			state.value = !state.value;
		},
		setState: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { naviState, setState } = naviSlice.actions;
export default naviSlice.reducer;
