import { useState } from "react";

const SingerSongsFromFilms = () => {
  const [singer, setSinger] = useState("");
  const [films, setFilms] = useState("");
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    // Validation
    if (!singer || !films) {
      setError("Please fill in all fields");
      return;
    }

    fetch(
      `http://localhost:8080/music/getSongBySingerAndFilm/${singer}/${films}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.songs && data.songs.length > 0) {
          console.log(data.songs);
          setSongs(data.songs);
          setError("");
        } else {
          setSongs([]);
          setError("No songs found for the specified singer and films.");
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
        List Songs sung by Specified Singer from specified films
      </h2>
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
      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <label htmlFor="films" style={{ marginRight: "10px" }}>
          Films:
        </label>
        <input
          type="text"
          id="films"
          value={films}
          onChange={(e) => setFilms(e.target.value)}
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
      {songs.length > 0 && (
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Song Name
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Film
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Music Director
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Singer
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Actor
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                }}
              >
                Actress
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
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
      )}
    </div>
  );
};

export default SingerSongsFromFilms;
