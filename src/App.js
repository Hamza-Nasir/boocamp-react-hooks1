import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';
import numberReducer from './numberReducer';

function App() {

  //let [number, setNumber] = useState(45);

  // increaseNum = () => setNumber(number++);
  // decreaseNum = () => setNumber(number--); 

  let value = useState(50);

  return (

      //<ValueContext.Provider value={45}>
      <ValueContext.Provider value={value}>
        <div>
        <Parent/>

        </div>

        </ValueContext.Provider>
      //</ValueContext.Provider>
      // {/* <ValueContext.Provider value={78}>
      //   <Parent/>
      // </ValueContext.Provider> */}

      // {/* Hello World! */}
      
      // {/* <button onClick={ () => setNumber(++number) }>Click to INCREASE Number</button><br/> */}
      // {/* <button onClick={ () => setNumber(--number) }>Click to DECREASE Number</button> */}

    
    
  )
}

export default App;
