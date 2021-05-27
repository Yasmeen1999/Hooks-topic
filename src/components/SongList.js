import React, { useState } from "react";
import Form from "../components/NewSongForm";
import uuid from "uuid/dist/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Tu hi tu har jaga", id: 1 },
    { title: "Khiriyath", id: 2 },
    { title: "saton janam me tere", id: 3 },
  ]);

  const addSongs = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>

      <Form addSongs={addSongs} />
    </div>
  );
};

export default SongList;
