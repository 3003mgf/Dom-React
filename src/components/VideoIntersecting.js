/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect, useState} from 'react';
import video from "../assets/GucciGift.mp4"

const VideoIntersecting = () => {
    let refVideo = useRef();
    const [isVisible, setIsVisible] = useState(false);
    
    const callbackFunction = (entries) =>{
        const [ entry ] = entries;
        if(entry.isIntersecting){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    };

    const options = {
        threshold: 0.5
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      if(refVideo.current) observer.observe(refVideo.current);
      
      if(!refVideo.current) observer.unobserve(refVideo.current);
      
      isVisible ? refVideo.current.play() : refVideo.current.pause();
    
    }, [refVideo, isVisible]);

    

    return ( 
        <section id="section11">
            <h2>Smart Video</h2>
            <div className='smart-video'>
            <video ref={refVideo} src={video} controls muted loop ></video>
            </div>
        </section>
     );
}
 
export default VideoIntersecting;

//Si quisieramos asignarle el intersecting a varios videos, podriamos ya sea crear un componente para cada video, o asignarle un data-attribute a cada video, un ref a la etiqueta contenedora y hacerlo de la siguiente manera:
/*
const call = (entries) => {
  refDiv.current.querySelectorAll("video[data-smart]").forEach(el => {
    if(el.isIntersecting){
        el.play();
    }else{
        el.pause();
    }
  })
};

useEffect(() => {
    const observer = new IntersectionObserver(call, {threshold: 0.5});

    if(refDiv.current){
        refDiv.current.querySelectorAll("video[data-smart]").forEach(el => observer.observe(el));
    };

    if(!refDiv.current){
        refDiv.current.querySelectorAll("video[data-smart]").forEach(el => observer.unobserve(el));
    }
}, [refDiv]);
*/