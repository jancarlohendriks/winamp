import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface libraryState {
  value: any[];
}

const initialState: libraryState = {
  value: [],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addPlaylist: (state, action: PayloadAction<any>) => {
      state.value = [...state.value, action.payload];
    },
    updatePlaylist: (
      state,
      action: PayloadAction<{
        originalPlaylist: string;
        updatedPlaylist: string;
      }>
    ) => {
      const { originalPlaylist, updatedPlaylist } = action.payload;
      if (state.value.includes(originalPlaylist)) {
        const updatedValue = state.value.map((playlist) =>
          playlist === originalPlaylist ? updatedPlaylist : playlist
        );
        state.value = updatedValue;
      }
    },
    removePlaylist: (state, action: PayloadAction<any>) => {
      state.value = state.value.filter(
        (playlist) => playlist !== action.payload
      );
    },
  },
});

export const { addPlaylist, updatePlaylist, removePlaylist } =
  librarySlice.actions;
export default librarySlice.reducer;
