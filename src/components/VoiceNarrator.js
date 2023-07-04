/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-negation */
import React, {useRef, useState, useEffect} from 'react';


const VoiceNarrator = () => {
    const [voices, setVoices] = useState([]);
    const [error, setError] = useState("");
    const refText = useRef();
    const speechMessage = new SpeechSynthesisUtterance();
    
    useEffect(() => {
        let synth = window.speechSynthesis;
        let id;
        // if(!'speechSynthesis' in window)return setError("Sorry, your device or navigator does not support this API")
        id = setInterval(()=> {
            if(synth.getVoices().length !== 0){
                setVoices(synth.getVoices());
                clearInterval(id);
            }
        }  ,10)    
    }, []);

    const handleChange = (e) =>{
        speechMessage.voice = voices.find(el => el.name === e.target.value);
    }
    const handleClick = (e) =>{
        speechMessage.text = refText.current.value;
        speechSynthesis.speak(speechMessage);
    }
    return ( 
        <section id="section13">
            <h2>Voice Narrator</h2>
            <select  onChange={(e)=> handleChange(e)}>
                <option value="">Choose a voice</option>
                {voices.length > 0 && voices.map((el, index) => <option key={index} value={el.name}>{el.name}</option>)}
            </select>
            <br/>
            <textarea cols="30" rows="10" ref={refText}></textarea>
            <br/>
            <button onClick={handleClick}>Speak</button>
            {error.length > 0 && <h3>{error}</h3>}
        </section>
     );
}
 
export default VoiceNarrator;