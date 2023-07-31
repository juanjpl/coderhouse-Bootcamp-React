import { useEffect, useState , useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
  
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handelTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

  }

  return (
    <>
      <div className="card">
        <h1>{time}</h1>
        <div className="botonera">
          <button onClick={() => {handelTime();
          console.log('Start');
          console.log(time)}}>Start</button>
          <button onClick={() => {clearInterval(id.current);
          console.log('Pause')}}>Pause</button>
          <button onClick={() =>{ 
                                clearInterval(id.current);
                                setTime(0);
                                console.log('Reset')
                                }}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
