import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          {/* <Routes>
            <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode} />} />
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
