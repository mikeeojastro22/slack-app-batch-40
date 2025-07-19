import { useState } from 'react';
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataProvider";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // react hook for automatically changing the path in the url

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add authentication here
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