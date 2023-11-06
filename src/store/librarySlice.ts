import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Playlist } from "@/@types/playlist";

interface libraryState {
  value: Playlist[];
}

let nextPlaylistId = 0;

const initialState: libraryState = {
  value: [],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addPlaylist: (state, action: PayloadAction<string>) => {
      state.value.push({
        id: nextPlaylistId++,
        name: action.payload,
      });
    },
    updatePlaylist: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      const { id, name } = action.payload;
      const playlistToUpdate = state.value.find(
        (playlist) => playlist.id === id
      );

      if (playlistToUpdate) {
        playlistToUpdate.name = name;
      }
    },
    removePlaylist: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.value = state.value.filter((playlist) => playlist.id !== id);
    },
  },
});

export const { addPlaylist, updatePlaylist, removePlaylist } =
  librarySlice.actions;
export default librarySlice.reducer;
