import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SongList = () => {
  const [songs, setSongs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/music/getAllSongs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSongs(data.songs);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (songName) => {
    fetch(`http://localhost:8080/music/deleteSong/${songName}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Update the state after deleting the song
        setSongs(songs.filter((song) => song.songName !== songName));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Total Count of Documents: {songs.length}</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Song Name
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Film</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Music Director
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Singer</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actor</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actress
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Update</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {songs?.map((song, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {song.songName}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {song.film}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {song.musicDirector}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {song.singer}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {song.actor}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {song.actress}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  style={{
                    backgroundColor: "green",
                    outline: "none",
                    color: "white",
                    border: "none",
                  }}
                  onClick={() => {
                    navigate(`/updateSong/${song.songName}`, {
                      state: { song: song },
                    });
                  }}
                >
                  Update
                </button>
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  style={{
                    backgroundColor: "red",
                    outline: "none",
                    color: "white",
                    border: "none",
                  }}
                  onClick={() => handleDelete(song.songName)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
