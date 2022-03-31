import React, { useState } from 'react'
import './Components.css';


// constructor(props) {
//   super(props);
// }

const ButtonItem = (props) => {

  const [lightState, setLight] = useState('Dark')

  function handleStateLight(lightState){
    if(lightState == 'Dark'){
     setLight('Light');
     console.log('lightState has been switched from', lightState, 'to Light');
    };
    if (lightState == 'Light'){
     setLight('Dark');
     console.log('lightState has been switched from', lightState, 'to Dark');
    };
  };

  return (
    <div>
          {/* The function arrow that is here below, allows us transfer the context to their parent?*/}
        <div className='ContainerButton' onClick={() => {
                  (props.send1(lightState));
                  handleStateLight(lightState);
        }}>
        <button className={
        `ButtonItem${lightState}`}></button>
        </div>

    </div>
  )
}

export default ButtonItem