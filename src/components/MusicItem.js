import React from 'react';
import './MusicItem.css';

const MusicItem = ({song, key }) => {

    return (
        <>
        <br/>
        <h3>Chart Position: {song.category.attributes["im:id"]}</h3>
        <p><b>Song Title:</b> {song.["im:name"].label}</p>
        <p><b>Artist:</b> {song.["im:artist"].label}</p>
        <br/>
        <hr className="musicitem_hr"/>
        <br/>

        </>
    )
}

export default MusicItem;