import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import { tagsAPI } from "../api/tags";

function AddSnack() {
  const [snacks, setSnacks] = useState([]);
  const [tags, setTags] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [selectTags, setSelectTags] = useState([]);

  useEffect(() => {
    tagsAPI.getTags().then(
      (tags) => {
        setTags(tags);
      },
      (error) => console.log(error)
    );
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTagsChange = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    setSelectTags(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSnack = {
      name: name,
      image: image,
      description: description,
      tags: selectTags,
    };
    snacksAPI
      .addSnack(newSnack)
      .then((data) => {
        setSnacks([...snacks, data]);
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
          onChange={handleNameChange}
          required
        />
        <input
          accept="image/*"
          // className={classes.input}
          id="Snack-image"
          onChange={handleImageChange}
          name="image"
          type="file"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handleDescriptionChange}
          required
        />
        <select id="" onChange={handleTagsChange} required multiple>
          {tags.map((tag) => {
            return (
              <option value={tag.id} key={tag.id}>
                {tag.name}
              </option>
            );
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddSnack;
