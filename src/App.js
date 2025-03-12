import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [fontColor, setfontColor] = useState('dark')
  const [mode, setMode] = useState('light') ////////// Whether dark mode is enable ////
  const [alert, setAlert] = useState(null);
  const showAlert  = (message, type) => {
    setAlert(
      {
        msg : message,
        type :type
      }
    )
    setTimeout(()=>{
        setAlert(null);
      },2000);
    }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setfontColor('light');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      setfontColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>      
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} fontColor = {fontColor} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
       <About mode={mode} />
    </>
  );
}

export default App;
