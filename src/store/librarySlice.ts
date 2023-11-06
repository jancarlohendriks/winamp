import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface playlistState {
  value: any[];
}

const initialState: playlistState = {
  value: [],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addPlaylist: (state, action: PayloadAction<any>) => {
      state.value = [...state.value, action.payload];
    },
    removePlaylist: (state, action: PayloadAction<any>) => {
      state.value = state.value.filter(
        (playlist) => playlist !== action.payload
      );
    },
  },
});

export const { addPlaylist, removePlaylist } = librarySlice.actions;
export default librarySlice.reducer;
