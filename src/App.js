import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [fontColor, setfontColor] = useState('dark')
  const [mode, setMode] = useState('light') ////////// Whether dark mode is enable ////
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setfontColor('light');
      document.body.style.backgroundColor = "grey";
    }
    else{
      setMode('light');
      setfontColor('dark');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>      
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} fontColor = {fontColor} />
      <TextForm heading="Enter the text below to analyze" mode={mode} />
       {/* <About /> */}
    </>
  );
}

export default App;
