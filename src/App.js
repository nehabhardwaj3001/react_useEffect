import React,{useState , useEffect} from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(0);
  // const[count1, setCount1] = useState(50);


const handleIncrement = () => {
      setCount(count+1);
} 

const handleDecrement = () => {
  setCount(count-1);
} 

 useEffect(() => {
   console.log('useEffect Called');
 })

  return (
    <div>
      <h1> Count Up : {count}</h1>
      <button type='button' onClick={handleIncrement}> Increment </button>

    {/* <h1> Count Down : {count1}</h1> */}
     <button type='button' onClick={handleDecrement}> Decrement </button>
  </div>

  );
}

export default App;
