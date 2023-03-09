import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Select from "./Components/Select";
import User from "./Components/User";

function App() {
  const [url, setUrl] = useState(`https://randomuser.me/api/?results=12&`);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setData(users.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSelectChange = (choice) => {
    setFilter(choice);
    setUrl(`https://randomuser.me/api/?results=12&${filter}`);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  useEffect(() => {
    setUrl(`https://randomuser.me/api/?results=12&${filter}`);
  }, [filter]);

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <h1 className="loading">Loading....</h1>
      ) : (
        <>
          <Select
            filter={filter}
            url={url}
            handleSelectChange={handleSelectChange}
            fetchData={fetchData}
          />
          <ul className="users-container">
            {data.map((user) => {
              const { cell, name, email, picture, phone, location } = user;
              return (
                <li key={cell} className="list-user">
                  <User
                    name={name}
                    email={email}
                    picture={picture}
                    phone={phone}
                    location={location}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
