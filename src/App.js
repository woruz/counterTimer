import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [counter, setCounter] = useState(10)
  const [start, setStart] = useState(false)
  
  useEffect(() => {
    let counterInterval;
    if (start && counter > 0) {
      counterInterval = setInterval(() => {
        setCounter(prevCounter => prevCounter - 1);
      }, 1000);
    }else if (counter === 0) {
      setStart(false);
    }
    //  This part between the comment i was missing........had to google it
    return () => {
      clearInterval(counterInterval)
    }
    // This part between the comment i was missing........had to google it
  }, [counter,start])
  
  
  return (
    <div className="App">
      {counter}
      <div>
        <button onClick={() => {
          setStart(true)
        }}>
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
