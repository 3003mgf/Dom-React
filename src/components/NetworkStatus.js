import React, {useState} from 'react';
import Swal from 'sweetalert2';

const NetStatus = () => {

    const [text, setText] = useState("Online 😀");
    
    const isOnline = () =>{
        if(!navigator.onLine){
            Swal.fire({
                icon: "warning",
                text: "Conection Lost :(",
                showConfirmButton: true
            });
        }else{
            Swal.fire({
                icon: "success",
                text: "Conection Recovered :)",
                showConfirmButton: true
            });
        }
    }
    
   window.addEventListener("online", e=>{
    isOnline();
    setText("Online 😀")
   })

   window.addEventListener("offline", e=>{
    isOnline();
    setText("Offline 😟");
   })
    return ( 
        <section id="section6">
        <div>
            <h2>Network Status</h2>
            <p>Network Status: {text}</p>
        </div>
        </section>
     );
}
 
export default NetStatus;