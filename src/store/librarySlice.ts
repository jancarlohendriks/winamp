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
    addSongToPlaylist: (state, action) => {
      const { playlistId, song } = action.payload;
      const playlist = state.value.find((p) => p.id == playlistId);
      if (playlist) {
        const songReference = {
          id: song.id,
          name: song.name,
          artist: song.artist,
        };
        playlist.songs.push(songReference);
      }
    },
  },
});

export const {
  addPlaylist,
  updatePlaylist,
  removePlaylist,
  addSongToPlaylist,
} = librarySlice.actions;
export default librarySlice.reducer;
