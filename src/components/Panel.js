/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useRef} from 'react';
import { MenuContext } from '../context/menuContext';

const Panel = () => {
    let refNav = useRef();
    let refAside = useRef();
    const {panelState, setPanelState, refSections} = useContext(MenuContext);
    
    const handleClick = (e) =>{
    setPanelState(false);
    }

    const cb = (entries) =>{
       entries.forEach(entry => {
        let id = entry.target.id;
        if(entry.isIntersecting){
          refNav.current.querySelector(`a[href = "#${id}"]`).classList.add("is-active");
        }else{
            refNav.current.querySelector(`a[href = "#${id}"]`).classList.remove("is-active");
        }
       })
    }

    const options = {
        threshold: 1
    }

useEffect(() => {
    refNav.current.querySelectorAll("a").forEach(el => {
        el.addEventListener("click", handleClick);
    })
    const observer = new IntersectionObserver(cb ,options);
    if(refSections.current){
        refSections.current.querySelectorAll("section").forEach(el => observer.observe(el));
    }else{
        refSections.current.querySelectorAll("section").forEach(el => observer.unobserve(el));
    }
    
}, [refSections]);
   
    return ( 
        <aside className={`asidePanel ${panelState && "is-active"}`} ref={refAside}>
            <nav className="navPanel" ref={refNav}>
                <a href="#section1" id="panel-a">Watch & Alarm</a>
                <a href="#section2" id="panel-a">Colision</a>
                <a href="#section3" id="panel-a">Regresive Counter</a>
                <a href="#section4" id="panel-a">Responsive Design</a>
                <a href="#section5" id="panel-a">Responsive Tester</a>
                <a href="#section6" id="panel-a">Network Status</a>
                <a href="#section7" id="panel-a">WebCam</a>
                <a href="#section8" id="panel-a">GeoLocation</a>
                <a href="#section9" id="panel-a">Search Filter</a>
                <a href="#section10" id="panel-a">Responsive Slider</a>
                <a href="#section11" id="panel-a">Intersection Observer</a>
                <a href="#section12" id="panel-a">Contact Form</a>
                <a href="#section13" id="panel-a">Synthesis Speech</a>
                <a href="#section14" id="panel-a">Uploader</a>
            </nav>
        </aside>
     );
}
 
export default Panel;