import { useState } from "react";
import { tagsAPI } from "../api/tags";

function AddTag() {
  const [tags, setTags] = useState([]);
  const [newTagName, setNewTagName] = useState([]);

  const handleNewTagChange = (e) => {
    setNewTagName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTag = {
      name: newTagName,
    };
    tagsAPI
      .addTag(newTag)
      .then((data) => {
        setTags([...tags, data]);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleNewTagChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTag;
