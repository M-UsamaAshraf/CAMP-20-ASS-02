import './App.css';
import React , { useState } from 'react';


function App() {
  let [count, setCount] = useState(0);
  // let [waqt, setWaqt] = useState(true);
  let [isMorning, setMorning] = useState(true)

  return (
    
  
    // <div className={`App ${ time ? `dayTime`: `nigthTime`}`} >

    <div className={`App ${isMorning ? 'dayLight' : ''}`} >
     
     <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>



      <h1>bro you just clicked the button for {count} times</h1>
      <button onClick={()=> setCount(count +1)}>
        break it
      </button>


      <button onClick={() => setMorning(!isMorning)}> 
        Update Day
      </button>



      {/* <p>
        Bro are you fine with time or lets change
        <button onClick={()=>setWaqt(qwerty)}>
          Change it.
        </button>
      </p> */}
    </div> 
  );
}

export default App;
