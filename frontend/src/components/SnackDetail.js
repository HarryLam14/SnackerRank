import { useState, useEffect } from "react";
import { snacksAPI } from "../api/snacks";
import { tagsAPI } from "../api/tags";

function SnackDetail({ snack_id }) {
  const [snack, setSnack] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    snacksAPI.getSnack(snack_id).then(
      (snack) => {
        setSnack([snack]);
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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
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
              <td>{snack.description}</td>
              <td>
                {snack.tags.map((id) => {
                  return tags.map((tag) => tag.id === id && `${tag.name},`);
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SnackDetail;
