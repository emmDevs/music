import React from 'react';
import './MusicList.css';
import MusicItem from './MusicItem';

const MusicList = ({songs, loaded}) => {

    if(!loaded){
        return <p>Loading...</p>
    }

    const musicArray = songs.feed.entry.map((song) => {
        return (
            <MusicItem song={song} key={song.id.attributes["im:id"]}></MusicItem>
        )
    })


    return(
        <>
        <ul>
            {musicArray}
        </ul>
        </>
    )
}

export default MusicList;