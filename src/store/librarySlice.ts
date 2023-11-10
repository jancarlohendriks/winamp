import { createSlice } from "@reduxjs/toolkit";
import { Playlist } from "@/@types/playlist";
import addPlaylistReducer from "@/reducers/addPlaylistReducer";
import updatePlaylistReducer from "@/reducers/updatePlaylistReducer";
import removePlaylistReducer from "@/reducers/removePlaylistReducer";
import addSongToPlaylistReducer from "@/reducers/addSongToPlaylist";
import removeSongFromPlaylistReducer from "@/reducers/removeSongFromPlaylist";

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
    removeSongFromPlaylist: removeSongFromPlaylistReducer,
  },
});

export const {
  addPlaylist,
  updatePlaylist,
  removePlaylist,
  addSongToPlaylist,
  removeSongFromPlaylist,
} = librarySlice.actions;
export default librarySlice.reducer;
