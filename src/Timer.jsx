import "./Timer.css"
import { useState, useEffect } from "react";
import Certificate from "./Certificate"

const Timer = ({startTimer, updateStartTimer, updateResult, updatePosition, correctWords, reset, accuracy, wordCounter}) => {

    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        let id;
        if(startTimer){
        id = setInterval(() => {
            setSeconds((seconds)=>{
                if(seconds > 0){
                    return seconds-1;  
                }else{
                    updateStartTimer(false);
                    updateResult("Inactive");
                     updatePosition(0);
                    clearInterval(id);
                    return 0;
                    
                }
                
            })
           

        }, 1000);
    }
    }, [startTimer]);

    let triggerReset = ()=>{
        setSeconds(60);
        reset();
    }

    return (
        <div className="timer">
            <h4>Time ends in:{seconds}</h4>
            <h4>Speed:{~~(correctWords/(60-seconds) * 60).toFixed(2)} WPM</h4>
    
            {seconds <=0 ? <Certificate triggerReset={triggerReset} accuracy={accuracy} correctWords={correctWords} wordCounter={wordCounter}/> : <div></div>}
        </div>
    );
};

export default Timer;