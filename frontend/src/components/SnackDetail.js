import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import { tagsAPI } from "../api/tags";
import { useParams } from "react-router-dom";

import "../static/snackdetail.css"

function SnackDetail() {
  const [snack, setSnack] = useState([]);
  const [tags, setTags] = useState([]);
  const snack_id = useParams();

  useEffect(() => {
    snacksAPI.getSnack(snack_id['id']).then(
      (snack) => {
        setSnack(snack);
      },
      (error) => console.log(error)
    );
  }, []);

  useEffect(() => {
    tagsAPI.getTags().then(
      (tags) => {
        setTags(tags);
      },
      (error) => console.log(error)
    );
    
  }, []);

  console.log(snack)
  return (
    <div>
      <div id="roundedcontainer">

        <img src={snack.image}/> 
        <div id="snacktext">
          <h1>{snack.name}</h1>
          <p>{snack.description}</p>
        </div>

      <div/> 
    </div>

      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Tags</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {snack.map((snack) => (
            <tr key={snack.id}>
              <td>{snack.id}</td>
              <td>{snack.name}</td>
              <td><img src={snack.image}/></img></td>
              <td>{snack.description}</td>
              <td>
                {snack.tags.map((id) => {
                  return tags.map((tag) => tag.id === id && `${tag.name},`);
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default SnackDetail;
