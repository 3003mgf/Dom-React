/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';


function div1Content(){
    return(
        <iframe width="560" height="315" style = {{borderRadius: "2rem"}} src="https://www.youtube.com/embed/s0dMTAQM4cw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    )
};

function div2Content(){
    return(
        <iframe width="560" height="315" style = {{borderRadius: "2rem"}} src="https://www.youtube.com/embed/HdPzOWlLrbE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    )
};

function div1A(){
    return(
        <a target="_blank" rel="noopener noreferrer" href = "https://youtu.be/s0dMTAQM4cw" style = {{textDecorationColor: "palevioletred", color: "rgb(107, 101, 101)", fontWeight: "bold"}} > Watch AI intelligence video </a>
    )
}


function div2A(){
    return(
        <a target="_blank" rel="noopener noreferrer" href = "https://youtu.be/HdPzOWlLrbE" style = {{textDecorationColor: "palevioletred", color: "rgb(107, 101, 101)", fontWeight: "bold"}} > Watch Universe Origin video </a>
    )
}


const ResponsiveDesign = () => {
    const [d1, setD1] = useState("");
    const [d2, setD2] = useState("");
    
    let mediaQuery = "(min-width: 1024px)";
    let breakpoint = window.matchMedia(mediaQuery); 
    
    const responsive = (e) =>{
        if(e.matches){
            setD1(div1Content);
            setD2(div2Content);
        }else{
            setD1(div1A);
            setD2(div2A);
        }
    };

    useEffect(() => {
        breakpoint.addListener(responsive);
        responsive(breakpoint);
    }, []);

    return ( 
        <section id="section4">
        <div>
            <h2>Responsive Design</h2>
            <div>{d1}</div>
            <div>{d2}</div>
        </div>
        </section>
     );
}
 
export default ResponsiveDesign;