import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { addPlaylist, removePlaylist } from "@/store/librarySlice";

const Playlist = () => {
  const [playlist, setPlaylist] = useState<any>(null);
  const library = useSelector((state: RootState) => state.library.value);
  const dispatch = useDispatch();

  const handleAddPlaylist = () => {
    dispatch(addPlaylist(playlist));
  };

  const handleRemovePlaylist = (item: any) => {
    dispatch(removePlaylist(item));
  };

  return (
    <>
      <div>
        <input onChange={(e) => setPlaylist(e.target.value)} type="text" />
        <button onClick={handleAddPlaylist}>Add Playlist</button>

        {library && (
          <ul>
            {library.map((playlist, index) => (
              <li key={index}>
                {playlist}
                <button onClick={() => handleRemovePlaylist(playlist)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Playlist;
