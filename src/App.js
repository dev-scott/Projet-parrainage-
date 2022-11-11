import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from "react-router"
import SignUp from './components/SignUP/SignUp';
import "./App.css"
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">




      <NavBar />

      <Routes>

        {/* <Route path="nav-links" element={<Home/>}/> */}
        <Route path="sign-up" element={<SignUp />} />
        <Route path="home" element={<Home />} />

      </Routes>

    </div>

  );
}

export default App;
