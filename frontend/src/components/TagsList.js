import { useState, useEffect } from "react";
import { tagsAPI } from "../api/tags";
import { Link } from 'react-router-dom'
import CategoryDisplay from './CategoryDisplay';
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

  const handleClick = (e) => {
    console.log(e.target.valu);
    setTargetTag({"tags": e.target.value});
    console.log(targetTag);
  };

  return (
    <div>
      <ul id="subject" required multiple>
        {tags.map((tag) => {
          return (
            <div className = "cards">
            <Card name = {tag.name} id = {tag.id} pathname = {`/tag/${tag.id}`} description = ''/>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TagsList;
