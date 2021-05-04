import { useState, useEffect } from "react";
import { tagsAPI } from "../api/tags";
import Card from './Card.js'

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

  return (
    <div>
      <ul required multiple>
        <div className = "cards">
        {tags.map((tag) => {
          return (
            
            <Card key={tag.id} name={tag.name} id={tag.id} pathname={`/tag/${tag.id}`} description=''/>
            
          );
        })}
        </div>
      </ul>
    </div>
  );
}

export default TagsList;
