import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import SongList from "./pages/SongList";
import MusicDirectorSongs from "./pages/MusicDirectorSongs";
import AddSong from "./pages/AddSong";
import DirectorSingerSongs from "./pages/DirectorSingerSongs";
import SingerSongsFromFilms from "./pages/SingerSongsFromFilms";
import UpdateSong from "./pages/UpdateSong";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/addSong" element={<AddSong />} />
        <Route path="/musicdirectorsongs" element={<MusicDirectorSongs />} />
        <Route path="/directorsingersongs" element={<DirectorSingerSongs />} />
        <Route
          path="/singersongsfromfilms"
          element={<SingerSongsFromFilms />}
        />
        <Route path="/updateSong/:songname" element={<UpdateSong />} />
      </Routes>
    </>
  );
};

export default App;
