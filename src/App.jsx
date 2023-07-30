import { useState , useRef , useEffect } from 'react'
import './App.css'

function App() {

  const [timerDays, setTimerDays] = useState('10');
const [timerHours, setTimerHours] = useState('00');
const [timerMinutes, setTimerMinutes] = useState('00');
const [timerSeconds, setTimerSeconds] = useState('00');

let interval = useRef();

const startTimer =()=>{
  const countdownDate = new Date('Jan 1, 2023 00:00:00').getTime();

  interval.current = setInterval(()=>{
    const now = new Date().getTime();
    const distance= now -countdownDate ;
   

    const days =Math.floor(  distance/(1000*60*60*24));
    const hours =Math.floor(  (distance%(1000*60*60*24))/(1000*60*60));
    const minutes =Math.floor(  (distance%(1000*60*60))/(1000*60));
    const seconds =Math.floor(  (distance%(1000*60))/1000);
   

    if(distance <0){
      //stop ou time
      clearInterval(interval.current);
        }else{
          //update timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      
      
  },1000);
};


//componentDidMount
useEffect(()=>{
  startTimer();
  return()=>{
    clearInterval(interval.current);
  }
})



  return (
    <>
     
      <div className="card">
        <div className="section">
        <p  className='hour'>{timerDays}</p>
       <p>days</p>
        </div>
        <p>:</p>
        <div className="section">
        <p  className='hour'>{timerHours}</p>
       <p>hours</p>
        </div>
        <p>:</p>
        <div className="section">
        <p className='hour'>{timerMinutes}</p>
       <p>minuts</p>
        </div>
        <p>:</p>
        <div className="section">
        <p  className='hour'>{timerSeconds}</p>
       <p>seconds</p>
        </div>
        
      </div>
    
     
    </>
  )
}


export default App;
