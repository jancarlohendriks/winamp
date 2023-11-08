import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
  addPlaylist,
  updatePlaylist,
  removePlaylist,
} from "@/store/librarySlice";
import { Playlist } from "@/@types/playlist";

const Playlist: React.FC = () => {
  const [playlist, setPlaylist] = useState<string>("");
  const [originalPlaylistId, setOriginalPlaylistId] = useState<number | null>(
    null
  );
  const [updatedPlaylistName, setUpdatedPlaylistName] = useState<string>("");

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
  const handleRemovePlaylist = (id: number) => {
    dispatch(removePlaylist(id));
  };

  // UPDATE
  const handleUpdatePlaylist = () => {
    if (updatedPlaylistName && originalPlaylistId !== null) {
      dispatch(
        updatePlaylist({ id: originalPlaylistId, name: updatedPlaylistName })
      );
      setOriginalPlaylistId(null);
    }
  };

  // EDIT
  const handleEditPlaylist = (id: number) => {
    setOriginalPlaylistId(id);
    const playlistToEdit = library.find((item) => item.id === id);
    if (playlistToEdit) {
      setUpdatedPlaylistName(playlistToEdit.name);
    }
  };

  // CANCEL
  const handleCancelEdit = () => {
    setOriginalPlaylistId(null);
    setUpdatedPlaylistName("");
  };

  const renderEditForm = () => {
    return (
      <div>
        <input
          type="text"
          value={updatedPlaylistName}
          onChange={(e) => setUpdatedPlaylistName(e.target.value)}
        />
        <button onClick={handleUpdatePlaylist}>Save</button>
        <button onClick={handleCancelEdit}>Cancel</button>
      </div>
    );
  };

  const renderPlaylistItem = (playlist: Playlist) => {
    const isEditing = originalPlaylistId === playlist.id;
    const renderContent = () => {
      if (isEditing) {
        return renderEditForm();
      }
      return (
        <div>
          {playlist.name}
          <button onClick={() => handleEditPlaylist(playlist.id)}>Edit</button>
        </div>
      );
    };

    return (
      <li key={playlist.id}>
        {renderContent()}
        <button onClick={() => handleRemovePlaylist(playlist.id)}>
          Remove
        </button>
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
        <ul>{library.map((playlist) => renderPlaylistItem(playlist))}</ul>
      )}
    </div>
  );
};

export default Playlist;
