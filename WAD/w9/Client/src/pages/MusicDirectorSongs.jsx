import { useState } from "react";

const MusicDirectorSongs = () => {
  const [musicDirector, setMusicDirector] = useState("");
  const [directorSongs, setDirectorSongs] = useState([]);

  const handleInputChange = (e) => {
    setMusicDirector(e.target.value);
  };

  const handleSearch = () => {
    fetch(
      `http://localhost:8080/music/getSongByMusicDirector/${musicDirector}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Data: ", data.songs);
        setDirectorSongs(data.songs);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        width: "70vw",
        margin: "20px auto",
      }}
    >
      <input
        type="text"
        placeholder="Enter Music Director Name"
        value={musicDirector}
        onChange={handleInputChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "5px 10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {directorSongs.length > 0 ? (
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Song Name
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Film</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Music Director
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Singer
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Actor
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Actress
              </th>
            </tr>
          </thead>
          <tbody>
            {directorSongs?.map((song, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>No Songs Found</h3>
      )}
    </div>
  );
};

export default MusicDirectorSongs;
