import React, { useState } from "react";

// by using addsongs props we are using this
const Form = ({ addSongs }) => {
  // usestate
  const [title, setTitle] = useState("");
  // eventhandler
  const handleSubmit = (e) => {
    e.preventDefault();
    addSongs(title);
    setTitle("");
  };
  return (
    <form style={{ margin: "10px" }} onSubmit={handleSubmit}>
      <label style={{ padding: "10px" }}>Song Name :</label>
      <input
        style={{ padding: "5px" }}
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={{ padding: "5px", margin: "10px" }}
        type="submit"
        value="add song"
      />
    </form>
  );
};

export default Form;
