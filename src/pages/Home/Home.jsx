import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "../../context/DataProvider";

function Home() {
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    
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
  