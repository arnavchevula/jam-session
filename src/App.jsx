import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import JamList from "./components/JamList";
import NowPlaying from "./components/NowPlaying";

import { AuthProvider } from "./components/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
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
            <Route path="/jam-list" element={<JamList />} />
            <Route path="/now-playing" element={<NowPlaying />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
