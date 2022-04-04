import './App.css';
import { BsGithub } from "react-icons/bs";
import ButtonItem from "./components/Components.jsx";
import { useEffect, useState } from 'react';
import 'animate.css';


export function App() {

  const toGitHub = () => {
    window.open("https://github.com/PlutarchDev");
};

 const [statusLight, setLightApp] = useState('Dark');

useEffect(() => {
  setLightApp('Light');

}, [])

 const handleLightingApp = () => { 
  if(statusLight == 'Dark'){
   setLightApp('Light');
   console.log('APP: lightState has been switched from Light to ', statusLight);
  };
  if(statusLight == 'Light'){
   setLightApp('Dark');
   console.log('APP: lightState has been switched from Dark', statusLight);
  };
};

  return (
    <div className="App" >

      <header className={`App-header${statusLight}`}>
      <div className='containerButton'>

      <ButtonItem send1={send1=> setLightApp(send1)}
      className="ButtonItem" onChange={handleLightingApp} />

      </div>
      <h3 className="animate__animated animate__bounceInDown"> Ready to work?</h3>
      <div className='containerLogoGit'><i onClick={toGitHub} className='GitHubLogo'><BsGithub /> </i></div>
      </header>

    </div>
  );
}

export default App;
