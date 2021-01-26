import React from 'react';
import './MusicList.css';
import MusicItem from './MusicItem';

const MusicList = ({songs, loaded}) => {

    // const musicArray = songs.feed.entry.map((song) => {
    //     return (
    //         <MusicItem song={song} key={song.feed.entry.id}></MusicItem>
    //     )
    // })


    return(
        <>
        <p>This is a list of the top 20 songs</p>
        <ul>
            <MusicItem></MusicItem>
        </ul>
        </>
    )
}

export default MusicList;