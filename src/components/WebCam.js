import React, {useRef, useState} from 'react';

const WebCam = () => {

    const refVideo = useRef();

    const [error, setError] = useState(null);
    
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(stream => {
            console.log(stream);
            refVideo.current.srcObject = stream;
            refVideo.current.play();
            setError(null);
        })
        .catch(err => {
           setError("User didn't allow usage of the WebCam");
        })
    }
    return ( 
        <section id="section7">
        <div>
            <h2>WebCam</h2>
            {!error && <video ref={refVideo}></video>}
            {error && <p>{error}</p>}
        </div>
        </section>
     );
}
 
export default WebCam;