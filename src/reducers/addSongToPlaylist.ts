import { PayloadAction } from "@reduxjs/toolkit";
import { LibraryState } from "@/store/librarySlice";
import { Song } from "@/@types/song";

const addSongToPlaylistReducer = (
  state: LibraryState,
  action: PayloadAction<{ playlistId: number; song: Song }>
) => {
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
};

export default addSongToPlaylistReducer;
