import { PayloadAction } from "@reduxjs/toolkit";
import { LibraryState } from "@/@types/libraryState";

const removePlaylistReducer = (
  state: LibraryState,
  action: PayloadAction<number>
) => {
  const id = action.payload;
  state.value = state.value.filter((playlist) => playlist.id !== id);
};

export default removePlaylistReducer;
