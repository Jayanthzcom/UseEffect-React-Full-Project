import { useEffect , useState} from "react";

export default function ProgressBar({timer}){

const [remainingTime, SetRemainingTime] = useState(timer);
    useEffect(() =>{
   
        const interval = setInterval(() =>{
          console.log("interval");
          SetRemainingTime(prevTime => prevTime - 10);
        },10);
    
        return () => {
          console.log("Cleeaning Up timer");
          clearTimeout(interval);
        }
      },[])


    return (
        <>
             <progress value={remainingTime} max={timer}/>
        </>
    )
}