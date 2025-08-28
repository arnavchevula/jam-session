import { useState, useEffect } from "react";
import axios from "axios";
import Musician from "./components/Musician";
import Dnd from "./components/Dnd";
import { Sortable } from "./components/Sortable";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { AuthProvider } from "./components/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [instrument, setInstrument] = useState("");
  const [musicians, setMusicians] = useState([]);

  useEffect(() => {
    const getMusicians = async () => {
      const response = await axios.get("http://localhost:3000/musicians");
      setMusicians(response.data);
    };

    getMusicians().catch(console.error);
  }, []);
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, email, instagram, phoneNum, instrument);
    axios
      .post("http://localhost:3000/add-musician", {
        name,
        email,
        instagram,
        phoneNum,
        instrument
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleInstagram = e => {
    setInstagram(e.target.value);
  };
  const handlePhoneNum = e => {
    setPhoneNum(e.target.value);
  };
  const handleInstrument = e => {
    setInstrument(e.target.value);
  };
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path="/register" element={<Registration />} />{" "}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
