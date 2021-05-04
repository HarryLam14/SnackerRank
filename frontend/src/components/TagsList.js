import { useState, useEffect } from "react";
import { tagsAPI } from "../api/tags";

function TagsList() {
  const [tags, setTags] = useState([]);
  const [targetTag, setTargetTag] = useState();

  useEffect(() => {
    tagsAPI.getTags().then(
      (tags) => {
        setTags(tags);
      },
      (error) => console.log(error)
    );
  }, []);

  const handleClick = (e) => {
    setTargetTag(e.target.value);
  };

  return (
    <div>
      <ul id="subject" required multiple>
        {tags.map((tag) => {
          return (
            <li value={tag.id} key={tag.id} onClick={handleClick}>
              <a href="/">{tag.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TagsList;
