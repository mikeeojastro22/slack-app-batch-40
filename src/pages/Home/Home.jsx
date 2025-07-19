import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "../../context/DataProvider";

const API_URL = process.env.REACT_APP_API_URL;

function Home() {
  const [userList, setUserList] = useState([]);
  const { userHeaders } = useData();

  const getUsers = async () => {
    try {
      // required by axios to have key of headers
      const requestHeaders = {
        headers: userHeaders
      }

      const response = await axios.get(`${API_URL}/users`, requestHeaders);
      const { data } = response;
      setUserList(data.data);
    } catch(error) {
      if(error) {
        return alert('Cannot get users!');
      }
    }
  }

  useEffect(() => {
    if(userList.length === 0) {
      getUsers();
    }
  })

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Dashboard</h2>
      <p>This is my slack app. Loading of users here...</p>

      {
        userList && 
        userList.map((individual) => {
          const { id, email } = individual;
          return (
            <div key={id}>
              <p>ID: {id}</p>
              <p>Email: {email}</p>
            </div>
          )
        })
      }
      {
        !userList && <div>No users available...</div>
      }
    </div>
  );
}
  
export default Home;
  