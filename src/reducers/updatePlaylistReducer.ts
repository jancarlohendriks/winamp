import { PayloadAction } from "@reduxjs/toolkit";
import { LibraryState } from "@/@types/libraryState";

const updatePlaylistReducer = (
  state: LibraryState,
  action: PayloadAction<{ id: number; name: string }>
) => {
  const { id, name } = action.payload;
  const playlistToUpdate = state.value.find((playlist) => playlist.id === id);

  if (playlistToUpdate) {
    playlistToUpdate.name = name;
  }
};

export default updatePlaylistReducer;
