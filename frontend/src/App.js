// currently just testing in App.js,
// this code will be split into different components eventually
import { useState, useEffect } from "react";
import { accountsAPI } from "./api/accounts";
import { snacksAPI } from "./api/snacks";
import { tagsAPI } from "./api/tags";
import _ from "lodash";
import Header from "./layout/Header";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [snacks, setSnacks] = useState([]);
  const [tags, setTags] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectTags, setSelectTags] = useState([]);
  const [newTagName, setNewTagName] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(accountsAPI.tokenHeader())) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    snacksAPI.getSnacks().then(
      (snacks) => {
        setSnacks(snacks);
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

  const onSubmit = (e) => {
    e.preventDefault();
    accountsAPI.login(username, password).then(
      (res) => {
        if (res.status === 200) {
          setLoggedIn(true);
        }
      },
      (error) => console.log(error)
    );
    setUsername("");
    setPassword("");
  };

  const userLogout = () => {
    accountsAPI.logout();
    setLoggedIn(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
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

  const handleNewTagChange = (e) => {
    setNewTagName(e.target.value);
  };

  const doSubmit = async (e) => {
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
      <Header loggedIn={loggedIn} />

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        ></input>
        <br></br>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
        <br></br>
        <input type="submit" value="Login"></input>
      </form>

      <br></br>
      <button onClick={userLogout}>Logout</button>

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
          {snacks.map((snack) => (
            <tr key={snack.id}>
              <td>{snack.id}</td>
              <td>{snack.name}</td>
              <td>{snack.description}</td>
              <td>{snack.tags}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          required
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handleDescriptionChange}
          required
        />
        <select id="subject" onChange={handleTagsChange} required multiple>
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

      <form onSubmit={doSubmit}>
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

export default App;
