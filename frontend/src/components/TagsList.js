import { useState, useEffect } from "react";
import { tagsAPI } from "../api/tags";
import Card from "./Card.js";

function TagsList() {
  const [tags, setTags] = useState([]);

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
      <ul className="cardsContainer" required multiple>
        <div className="cards">
          {tags.map((tag) => {
            return (
              <Card
                key={tag.id}
                name={tag.name}
                image={tag.image}
                pathname={`/tag/${tag.name}`}
                description=""
              />
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default TagsList;
