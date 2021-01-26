import React, { useState, useEffect } from 'react';
import './MusicContainer.css';
import MusicList from '../components/MusicList';

const MusicContainer = () => {

    const [songs, setSongs] = useState({});
    const [selectedSongId, setSelectedSongId] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getSongs();
    }, [selectedSongId])

    const getSongs = () => {
        console.log("getting song info");
        fetch("https://itunes.apple.com/gb/rss/topsongs/entry/limit=20/json")
        .then(res => res.json()
        .then(data => setSongs(data)))
        .then(() => setLoaded(true))
    }

    return(
        <>
            <h1>Current UK Top 20 Singles</h1>
            <MusicList songs={songs} loaded={loaded}/>
        </>
    )
}

export default MusicContainer;