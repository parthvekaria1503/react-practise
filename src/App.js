import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
  Link
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const Dm = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("dark mode active", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mode active", "primary");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
    <Router>
      <Navbar title="Text Utils" navtext1="Contact Us" navtext2="About Us" mode={mode}Dm={Dm}/>
      <Alerts alert={alert} />  
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text" heading2="enter text"/>}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
