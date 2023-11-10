import { createSlice } from "@reduxjs/toolkit";
import { Playlist } from "@/@types/playlist";
import addPlaylistReducer from "@/reducers/addPlaylistReducer";
import updatePlaylistReducer from "@/reducers/updatePlaylistReducer";
import removePlaylistReducer from "@/reducers/removePlaylistReducer";
import addSongToPlaylistReducer from "@/reducers/addSongToPlaylist";

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
    addSongToPlaylist: addSongToPlaylistReducer,
  },
});

export const {
  addPlaylist,
  updatePlaylist,
  removePlaylist,
  addSongToPlaylist,
} = librarySlice.actions;
export default librarySlice.reducer;
