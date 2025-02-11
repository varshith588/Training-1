import React, {useEffect, useRef, useState} from 'react';
import  VIDEO from "./video.mp4";
const RefExamples = () => {
    const [play , setplay] =useState(true);
    const eleRef = useRef();
    const videoRef = useRef();
    useEffect(()=>{
        eleRef.current.style.color="teal";
        eleRef.current.innerText = "React Ref"
    });

    let playORpause=()=>{
        if(play === true){
            videoRef.current.play();
            console.log(play);
            setplay(false);
        }else{
            videoRef.current.pause();
            console.log(play);
            setplay(true);
        }
    } 
        return (
            <div>
                <h1 ref={eleRef}>RefExamples</h1>
                <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
            </div>
        );
    }


export default RefExamples;