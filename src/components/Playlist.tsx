import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
  addPlaylist,
  updatePlaylist,
  removePlaylist,
} from "@/store/librarySlice";

const Playlist: React.FC = () => {
  const [playlist, setPlaylist] = useState<string>("");
  const [originalPlaylist, setOriginalPlaylist] = useState<string | null>(null);
  const [updatedPlaylist, setUpdatedPlaylist] = useState<string>("");

  const library = useSelector((state: RootState) => state.library.value);
  const dispatch = useDispatch();

  // ADD
  const handleAddPlaylist = () => {
    if (playlist) {
      dispatch(addPlaylist(playlist));
      setPlaylist("");
    }
  };

  // REMOVE
  const handleRemovePlaylist = (item: string) => {
    dispatch(removePlaylist(item));
  };

  // UPDATE
  const handleEditPlaylist = (item: string) => {
    setOriginalPlaylist(item);
    setUpdatedPlaylist(item);
  };

  const handleUpdatePlaylist = () => {
    if (
      updatedPlaylist &&
      originalPlaylist &&
      originalPlaylist !== updatedPlaylist
    ) {
      dispatch(
        updatePlaylist({
          originalPlaylist: originalPlaylist,
          updatedPlaylist: updatedPlaylist,
        })
      );
      setOriginalPlaylist(null);
    }
  };

  const handleCancelEdit = () => {
    setOriginalPlaylist(null);
    setUpdatedPlaylist("");
  };

  const renderEditForm = () => {
    return (
      <div>
        <input
          type="text"
          value={updatedPlaylist}
          onChange={(e) => setUpdatedPlaylist(e.target.value)}
        />
        <button onClick={handleUpdatePlaylist}>Save</button>
        <button onClick={handleCancelEdit}>Cancel</button>
      </div>
    );
  };

  const renderPlaylistItem = (playlist: string, index: number) => {
    return (
      <li key={index}>
        {originalPlaylist === playlist ? (
          renderEditForm()
        ) : (
          <div>
            {playlist}
            <button onClick={() => handleEditPlaylist(playlist)}>Edit</button>
          </div>
        )}
        <button onClick={() => handleRemovePlaylist(playlist)}>Remove</button>
      </li>
    );
  };

  return (
    <div>
      <input
        type="text"
        value={playlist}
        onChange={(e) => setPlaylist(e.target.value)}
      />
      <button onClick={handleAddPlaylist}>Add Playlist</button>

      {library && (
        <ul>
          {library.map((playlist, index) =>
            renderPlaylistItem(playlist, index)
          )}
        </ul>
      )}
    </div>
  );
};

export default Playlist;
