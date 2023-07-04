import React, {useState} from 'react';
import song from "../assets/audio.mp3"


let audio = new Audio(song);

let initialDate = new Date().toLocaleTimeString();

const Watch = () => {

    const [date, setDate] = useState(initialDate);
    const [showDate, setShowDate] = useState(false);
    
    const handleDate = () =>{
        setInterval(()=>{
            setDate(new Date().toLocaleTimeString());
        }, 1000)
    }

    if(showDate)handleDate();
    
    

    return ( 
        <section style={{textAlign: "center"}} id="section1">
            <h2>Watch & Alarm</h2>
            <div>{showDate && date}</div>
            <br/>
            <button onClick={()=> setShowDate(true)}>Start Watch</button>
            <button onClick={()=> setShowDate(false)}>Stop Watch</button>
            
            <br/><br/>
            <button onClick={()=> audio.play()}>Start Music</button>
            <button onClick={()=> audio.pause()}>Stop Music</button>
        </section>
     );
}
 
export default Watch;