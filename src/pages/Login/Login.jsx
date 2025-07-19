import { useState } from 'react';
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataProvider";

const API_URL = process.env.REACT_APP_API_URL;

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // react hook for automatically changing the path in the url
  const navigate = useNavigate();
  // useData context
  // function for setting headers
  const { handleHeaders } = useData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add authentication here
    try {

      // object literals
      const loginCredentials = {
        email, 
        password
      }

      // email: email
      // password: password

      const response = await axios.post(`${API_URL}/auth/sign_in`, loginCredentials);
      const { data, headers } = response;
      if(data.data && headers){
        handleHeaders(headers);
        onLogin(true);
        navigate('/');
      }
    } catch(error) {
      if(error){
        return alert('Invalid email or password!');
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login; 