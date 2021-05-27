import React, { useState } from "react";

const Form = ({ addSongs }) => {
  const [title, setTitle] = useState("");
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
