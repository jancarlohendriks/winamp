import { useState, useEffect } from "react";
import { Song } from "@/@types/song";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import useDebounce from "@/hooks/useDebounce";
import useFetch from "@/hooks/useFetch";
import millisecondsToMinutes from "@/lib/millisecondsToMinutes";

const AudioPlayer: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([] as Song[]);
  const [search, setSearch] = useState<string>("");

  const library = useSelector((state: RootState) => state.library.value);

  const debouncedSearch = useDebounce(search, 500);

  const url = `http://127.0.0.1:3000/songs?q=${debouncedSearch}&_limit=50`;
  const { data, error } = useFetch<Song[]>(url);

  useEffect(() => {
    if (data) {
      setSongs(data);
      if (debouncedSearch) setSongs(data);
    }
  }, [debouncedSearch, data]);

  // g stands for "global"
  // i stands for "case-insensitive"
  // $1 is a reference to the first capturing group in a regular expression (${searchTerm})
  const highlightText = (text: string, searchTerm: string) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<span class='highlighted'>$1</span>");
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* TODO: Move Now Playing to navigation */}
      <h2>Now playing: "Selected"</h2>
      <table>
        <thead>
          <tr>
            <th>Track Id</th>
            <th>Name</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td
                dangerouslySetInnerHTML={{
                  __html: highlightText(song.name, debouncedSearch),
                }}
              ></td>
              <td>{song.album}</td>
              <td
                dangerouslySetInnerHTML={{
                  __html: highlightText(song.artist, debouncedSearch),
                }}
              ></td>
              <td>{millisecondsToMinutes(song.duration)}</td>
              <td>
                <button>Play</button>
              </td>
              <td>
                <select>
                  <option value="Select playlist">Add to playlist</option>
                  {library.map((playlist) => (
                    <option key={playlist.id} value={playlist.name}>
                      {playlist.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AudioPlayer;
