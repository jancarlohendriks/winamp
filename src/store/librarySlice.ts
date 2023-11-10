import { createSlice } from "@reduxjs/toolkit";
import { Playlist } from "@/@types/playlist";
import addPlaylistReducer from "@/reducers/addPlaylistReducer";
import updatePlaylistReducer from "@/reducers/updatePlaylistReducer";
import removePlaylistReducer from "@/reducers/removePlaylistReducer";

export interface LibraryState {
  value: Playlist[];
}

const initialState: LibraryState = {
  value: [],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addPlaylist: addPlaylistReducer,
    updatePlaylist: updatePlaylistReducer,
    removePlaylist: removePlaylistReducer,
  },
});

export const { addPlaylist, updatePlaylist, removePlaylist } =
  librarySlice.actions;
export default librarySlice.reducer;
