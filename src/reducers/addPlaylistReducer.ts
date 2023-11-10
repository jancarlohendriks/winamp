import { PayloadAction } from "@reduxjs/toolkit";
import { LibraryState } from "@/store/librarySlice";

let nextPlaylistId = 0;

const addPlaylistReducer = (
  state: LibraryState,
  action: PayloadAction<string>
) => {
  state.value.push({
    id: nextPlaylistId++,
    name: action.payload,
    songs: [],
  });
};

export default addPlaylistReducer;
