import React from 'react';
import './MusicItem.css';

const MusicItem = ({song, key }) => {

    return (
        <>
        <h2>Chart Position: {song.category.attributes["im:id"]}</h2>
        <h2>Song Title: {song.["im:name"].label}</h2>
        <h3>Artist: {song.["im:artist"].label}</h3>

        </>
    )
}

export default MusicItem;