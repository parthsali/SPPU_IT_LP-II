const router = require('express').Router();
const Song = require('../models/songDetails');


// add a song
router.post('/addSong', async (req, res) => {
    const { songName, film, musicDirector, singer } = req.body;

    try {
        const song = new Song({
            songName,
            film,
            musicDirector,
            singer
        });

        await song.save();
        res.status(200).json({ message: "Song added successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});

// Display total count of documents and List all the documents in the browser.
router.get('/getAllSongs', async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json({ songs, count: songs.length });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});

//  List specified Music Director songs
router.get('/getSongByMusicDirector/:musicDirector', async (req, res) => {
    const musicDirector = req.params.musicDirector;
    try {
        const songs = await Song.find({ musicDirector });
        res.status(200).json({ songs, count: songs.length });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});


// List specified Music Director songs sung by specified Singer
router.get('/getSongByMusicDirectorAndSinger/:musicDirector/:singer', async (req, res) => {
    const { musicDirector, singer } = req.params;
    console.log(musicDirector, singer);
    try {
        const songs = await Song.find({ musicDirector, singer });
        res.status(200).json({ songs, count: songs.length });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});

// Delete the song which you don’t like.
router.delete('/deleteSong/:songName', async (req, res) => {
    const songName = req.params.songName;
    try {
        await Song.deleteOne({ songName });
        res.status(200).json({ message: "Song deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});

// Add a new song which is your favorite.
router.post('/addFavoriteSong', async (req, res) => {
    const { songName, film, musicDirector, singer } = req.body;

    try {
        const song = new Song({
            songName,
            film,
            musicDirector,
            singer
        });

        await song.save();
        res.status(200).json({ message: "Favorite Song added successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});


// List Songs sung by Specified Singer from specified films.
router.get('/getSongBySingerAndFilm/:singer/:film', async (req, res) => {
    const { singer, film } = req.params;
    try {
        const songs = await Song.find({ singer, film });
        res.status(200).json({ songs, count: songs.length });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});


// Update the document by adding Actor and Actress name in the document.
router.put('/updateSong/:songName', async (req, res) => {
    const songName = req.params.songName;
    const { actor, actress } = req.body;
    try {
        await Song.updateOne({ songName }, { $set: { actor, actress } });
        res.status(200).json({ message: "Song updated successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});

module.exports = router;    