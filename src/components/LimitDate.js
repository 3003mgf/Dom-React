import React, {useRef, useState} from 'react';

const LimitDate = () => {
    const [state, setState] = useState("");

    
    let refH3 = useRef();

    let date = "March 30, 2024 00:00:00";
    let limitDate = new Date(date).getTime();
    let message = "Happy Birthday Legend!";
    
  const int = () =>{
    let interval = setInterval(() => {
        
        let present = new Date().getTime();
        let result = (limitDate - present);
        
        let days = Math.floor(result / (1000 * 60 * 60 * 24));
        let hours = ("0" + Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        let minutes = ("0" + Math.floor((result % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
        let seconds = ("0" + Math.floor((result % (1000 * 60)) / (1000))).slice(-2);
        
        setState(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds Remaining`)
    
        if(result < 0){
            clearInterval(interval);
            setState(message);
        }

    }, 1000);
}
int();

    return ( 
        <section id="section3">
        <div>
            <h2>Limit Date</h2>
            <h3 ref={refH3}>{state}</h3>
        </div>
        </section>
     );
}
 
export default LimitDate;