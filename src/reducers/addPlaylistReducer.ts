import { PayloadAction } from "@reduxjs/toolkit";
import { LibraryState } from "@/@types/libraryState";

let nextPlaylistId = 0;

const addPlaylistReducer = (
  state: LibraryState,
  action: PayloadAction<string>
) => {
  state.value.push({
    id: nextPlaylistId++,
    name: action.payload,
  });
};

export default addPlaylistReducer;
