
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setAlert(null);
    },2000);
    
  }

  // const [textmode, setTextMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(73 75 76)'
      showAlert("Dark mode has been enabled", "success")
      
    }
  
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled", "success")
  }
  // setTextMode('light')
}
 return (
 <>
<BrowserRouter>

 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert= {alert}/>
 <div className="container my-3">
 <Routes>
 <Route path= "/" element={<TextForm showAlert={showAlert} heading="Try TextUtils- word counter, character counter" mode={mode}/>} />
 <Route path= "about" element={<About mode={mode}/>} />
</Routes>
</div>
</BrowserRouter>
 </>
 
 );
}

export default App;
