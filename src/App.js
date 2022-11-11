import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from "react-router"
import SignUp from './components/SignUP/SignUp';
import "./App.css"



function App() {
  return (
    <div className="App">




        <NavBar />

        <Routes>

          {/* <Route path="nav-links" element={<Home/>}/> */}
          <Route path="sign-up" element={<SignUp />} />

        </Routes>

      </div>

  );
}

export default App;
