import "./TypeSpeed.css"
import { useState, useEffect } from "react"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Timer from "./Timer";
import { getParagraph } from "./Helper";
import * as React from 'react';
import { Card } from "@mui/material";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";


export default function TypeSpeed() {

    let paragraph = getParagraph();
    let [stringData, setStringdata] = useState([]);

    let [position, setPosition] = useState(0);
    let [inpData, setinpData] = useState("");
    let [result, setResult] = useState("Inactive");
    let [startTimer, setStartTimer] = useState(false);

    let [wordCounter, setWordCounter] = useState(0);
    let [correctWords, setCorrectWords] = useState(0);
    let [accuracy, setAccuracy] = useState(0);


    function init() {
        let newStringData = [];
        paragraph.map((str) => {
            let newObj = { str: str, state: "u" };
            newStringData.push(newObj);
            setStringdata(newStringData);
        })
    }

    useEffect(() => {
        init();
        setResult("active");
    }, []);

    let reset = () => {
        setResult("active");
        init();
        updatePosition(0);
        setWordCounter(0);
        setCorrectWords(0);
        setinpData("");
    }

    let updateStartTimer = (status) => {
        setStartTimer(status);
    }
    let updateResult = (status) => {
        setResult(status);
    }
    let updatePosition = (status) => {
        setPosition(status);
    }
    let updateWpm = (status) => {
        setWpm(status);
    }



    let handleChange = (value) => {

        if (position == stringData.length - 1) {
            return;
        }

        if (!startTimer) {
            setStartTimer(true);
        }


        setinpData(value);

        if (value.endsWith(" ")) {

            setPosition((prevPosition) => {
                return prevPosition + 1;
            });

            setWordCounter((wordCounter) => {
                return wordCounter + 1;
            });

            if (inpData === stringData[position].str) {
                setCorrectWords((prevData) => {
                    return prevData + 1;
                });

                setAccuracy((prevData) => {
                    return (100 / wordCounter) * correctWords;
                });

                setStringdata((prevData) => {
                    let newData = [...prevData];
                    newData[position].state = "t";

                    return newData;

                })
            } else {
                setStringdata((prevData) => {
                    let newData = [...prevData];
                    newData[position].state = "f";

                    return newData;
                })
            }

            setinpData("");
        }

    }


    return (
        <div className="homeBox">


            <Timer startTimer={startTimer} updateStartTimer={updateStartTimer} updateResult={updateResult} updatePosition={updatePosition} updateWpm={updateWpm} correctWords={correctWords} reset={reset} accuracy={accuracy} wordCounter={wordCounter} />

            <Card
                className="content"
            >
                <Typography className="content">
                    {stringData.map((d1, index) => { //if we don't want to use these "()" brackets we can simply return the span. Both type of code are valid. 

                        if (index === position) {
                            return <span><b>{d1.str}&nbsp;</b></span>
                        } else {
                            if (d1.state === "f") {
                                return <span style={{ color: "red" }}>{d1.str}&nbsp;</span>
                            } else if (d1.state === "t") {
                                return <span style={{ color: "green" }}>{d1.str}&nbsp;</span>
                            }
                            return <span>{d1.str}&nbsp;</span>

                        }

                    })}
                </Typography>
            </Card>


<div className="inputArea">
            <FontAwesomeIcon icon={faKeyboard} className="icon"/>
            {result === "Inactive" ?

                    <TextField 
                    autoComplete="off"
                      
                        id="outlined-basic" variant="outlined" placeholder="Start typing..." onChange={(e) => handleChange(e.target.value)} value={inpData} disabled /> //</Box>
                :
        
                <TextField

                  autoComplete="off"
                  
                    id="outlined-basic" variant="outlined" placeholder="Start typing..." onChange={(e) => handleChange(e.target.value)} value={inpData} /> //</Box>
            }
            </div>



        </div>
    )
}