import { PayloadAction } from "@reduxjs/toolkit";
import { LibraryState } from "@/store/librarySlice";

const removeSongFromPlaylistReducer = (
  state: LibraryState,
  action: PayloadAction<{ playlistId: number; songId: number }>
) => {
  const playlist = state.value.find((p) => p.id === action.payload.playlistId);
  if (playlist) {
    playlist.songs = playlist.songs.filter(
      (song) => song.id !== action.payload.songId
    );
  }
};

export default removeSongFromPlaylistReducer;
