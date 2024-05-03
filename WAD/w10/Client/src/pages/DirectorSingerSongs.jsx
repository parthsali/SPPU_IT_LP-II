import { useState } from "react";

const DirectorSingerSongs = () => {
  const [musicDirector, setMusicDirector] = useState("");
  const [singer, setSinger] = useState("");
  const [directorSongs, setDirectorSongs] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    fetch(
      `http://localhost:8080/music/getSongByMusicDirectorAndSinger/${musicDirector}/${singer}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.songs && data.songs.length > 0) {
          console.log(data);
          setDirectorSongs(data.songs);
          setError("");
        } else {
          setError(
            "No songs found for the specified music director and singer."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(
          "An error occurred while fetching data. Please try again later."
        );
      });
  };

  return (
    <div
      style={{
        margin: "20px auto",
        maxWidth: "600px",
        textAlign: "center",
        color: "#333",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#007bff" }}>
        List specified Music Director songs sung by specified Singer
      </h2>
      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <label htmlFor="musicDirector" style={{ marginRight: "10px" }}>
          Music Director:
        </label>
        <input
          type="text"
          id="musicDirector"
          value={musicDirector}
          onChange={(e) => setMusicDirector(e.target.value)}
          style={{ padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <label htmlFor="singer" style={{ marginRight: "10px" }}>
          Singer:
        </label>
        <input
          type="text"
          id="singer"
          value={singer}
          onChange={(e) => setSinger(e.target.value)}
          style={{ padding: "5px" }}
        />
      </div>
      <button
        onClick={handleSearch}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
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

export default DirectorSingerSongs;
