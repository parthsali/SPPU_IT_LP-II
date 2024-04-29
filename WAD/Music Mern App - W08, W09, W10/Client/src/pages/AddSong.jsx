import { useState } from "react";

const AddSong = () => {
  const [songName, setSongName] = useState("");
  const [film, setFilm] = useState("");
  const [musicDirector, setMusicDirector] = useState("");
  const [singer, setSinger] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!songName || !film || !musicDirector || !singer) {
      alert("Please fill in all fields");
      return;
    }

    fetch("http://localhost:8080/music/addSong", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        songName,
        film,
        musicDirector,
        singer,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Song added successfully");
      })
      .catch((err) => console.log(err));

    setSongName("");
    setFilm("");
    setMusicDirector("");
    setSinger("");
  };

  return (
    <div style={{ margin: "20px auto", width: "100vw" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Add New Song
      </h2>
      <form onSubmit={handleSubmit} style={{ width: "50%", margin: "0 auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="songName" style={{ display: "block" }}>
            Song Name:
          </label>
          <input
            type="text"
            id="songName"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="film" style={{ display: "block" }}>
            Film:
          </label>
          <input
            type="text"
            id="film"
            value={film}
            onChange={(e) => setFilm(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="musicDirector" style={{ display: "block" }}>
            Music Director:
          </label>
          <input
            type="text"
            id="musicDirector"
            value={musicDirector}
            onChange={(e) => setMusicDirector(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="singer" style={{ display: "block" }}>
            Singer:
          </label>
          <input
            type="text"
            id="singer"
            value={singer}
            onChange={(e) => setSinger(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
            width: "103%",
          }}
        >
          Add Song
        </button>
      </form>
    </div>
  );
};

export default AddSong;
