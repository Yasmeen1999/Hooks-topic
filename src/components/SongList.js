import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/NewSongForm";
import Characters from "./chracters";
import uuid from "uuid/dist/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Tu hi tu har jaga", id: 1 },
    { title: "Khiriyath", id: 2 },
    { title: "saton janam me tere", id: 3 },
  ]);
  const [items, setItems] = useState([]);
  const [isloading, setIsloadig] = useState(false);
  // we can use a usestate multiple time as well
  const [age, setAge] = useState(20);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setItems(result.data);
      setIsloadig(false);
    };
    fetchdata();
  }, []);

  // function
  const addSongs = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div>
      <ul>
        {/* mapping a function */}
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      {/* using addsongs props */}
      <Form addSongs={addSongs} />

      <button
        style={{ marginLeft: "20px" }}
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Add age to 1 :{age}
      </button>
      <Characters isloading={isloading} items={items} />
    </div>
  );
};

export default SongList;
