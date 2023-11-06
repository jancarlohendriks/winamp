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
  const [originalPlaylist, setOriginalPlaylist] = useState<number | null>(null);
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
  const handleRemovePlaylist = (id: number) => {
    dispatch(removePlaylist(id));
  };

  // UPDATE
  const handleEditPlaylist = (id: number) => {
    setOriginalPlaylist(id);
    const playlistToEdit = library.find((item) => item.id === id);
    if (playlistToEdit) {
      setUpdatedPlaylist(playlistToEdit.name);
    }
  };

  const handleUpdatePlaylist = () => {
    if (updatedPlaylist && originalPlaylist !== null) {
      dispatch(updatePlaylist({ id: originalPlaylist, name: updatedPlaylist }));
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

  const renderPlaylistItem = (playlist: Playlist) => {
    return (
      <li key={playlist.id}>
        {originalPlaylist === playlist.id ? (
          renderEditForm()
        ) : (
          <div>
            {playlist.name}
            <button onClick={() => handleEditPlaylist(playlist.id)}>
              Edit
            </button>
          </div>
        )}
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
