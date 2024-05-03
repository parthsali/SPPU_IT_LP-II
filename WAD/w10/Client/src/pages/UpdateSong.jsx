import { useState } from "react";
import { useLocation } from "react-router-dom";

const UpdateSong = () => {
  const { state } = useLocation();

  const song = state?.song;

  const [actor, setActor] = useState(song?.actor);
  const [actress, setActress] = useState(song?.actress);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = () => {
    // Validation
    if (!actor || !actress) {
      setError("Please fill in all fields");
      return;
    }

    fetch(`http://localhost:8080/music/updateSong/${song.songName}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        actor,
        actress,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setError("");
      })
      .catch((err) => {
        console.error("Error updating song:", err);
        setMessage("");
        setError(
          "An error occurred while updating the song. Please try again later."
        );
      });
  };

  return (
    <div
      style={{
        margin: "20px auto",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#007bff" }}>
        Update Song Details
      </h2>
      <div
        style={{
          marginBottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <label htmlFor="songName">Song Name:</label>
          <input
            type="text"
            id="songName"
            value={song.songName}
            disabled
            style={{ padding: "5px", marginRight: "10px", width: "100%" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="film">Film:</label>
          <input
            type="text"
            id="film"
            value={song.film}
            disabled
            style={{ padding: "5px", marginRight: "10px", width: "100%" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="musicDirector">Music Director:</label>
          <input
            type="text"
            id="musicDirector"
            value={song.musicDirector}
            disabled
            style={{ padding: "5px", marginRight: "10px", width: "100%" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="singer">Singer:</label>
          <input
            type="text"
            id="singer"
            value={song.singer}
            disabled
            style={{ padding: "5px", marginRight: "10px", width: "100%" }}
          />
        </div>
      </div>

      <div style={{ width: "100%", marginBottom: "10px" }}>
        <label htmlFor="actor">Actor:</label>
        <input
          type="text"
          id="actor"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
          style={{ padding: "5px", marginRight: "10px", width: "100%" }}
        />
      </div>
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label htmlFor="actress">Actress:</label>
        <input
          type="text"
          id="actress"
          value={actress}
          onChange={(e) => setActress(e.target.value)}
          style={{ padding: "5px", marginRight: "10px", width: "100%" }}
        />
      </div>
      <button
        onClick={handleUpdate}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Update
      </button>
      {error && (
        <p
          style={{
            color: "red",
            marginTop: "10px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {error}
        </p>
      )}
      {message && (
        <p
          style={{
            color: "green",
            marginTop: "10px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default UpdateSong;
