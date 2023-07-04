import React, { useRef, useState } from 'react';


const Uploader = () => {

    const [loaded, setLoaded] = useState(null);
    const [file, setFile] = useState("");

    let refH4 = useRef();
    let refArticle = useRef();

    const upload = (file) =>{
        let formData = new FormData();
        formData.append("file", file);

        let options = {
            headers: {
                "enc-type": "multipart/form-data"
            },
            body: formData,
            method: "POST"
        };
        
        fetch("../php/uploader.php", options)
        .then(res => res.ok ? res.text() : Promise.reject(res))
        .then(data => console.log(data))
        .catch(err=> console.log(err))
    }

    const barrita = (file) =>{
       let fileReader = new FileReader();
       fileReader.readAsDataURL(file);

       fileReader.addEventListener("progress", e=>{
         setLoaded(parseInt(e.loaded * 100 / e.total));
         setFile(file.name);
       })

       fileReader.addEventListener("loadend", e=>{
        upload(file);  
        setTimeout(()=>{
            setLoaded(null);
            setFile(null);
            refArticle.current.classList.remove("is-active");
          }, 3000)
       })
    }
    
   const handleOver = (e) =>{
       e.preventDefault();
       e.target.classList.add("is-active");
       refH4.current.textContent = "Drop to upload";
   }

   const handleLeave = (e) =>{
    e.preventDefault();
    e.target.classList.remove("is-active");
    refH4.current.textContent = "Drag your file here";
   }
   
   const handleDrop = (e) =>{
    e.preventDefault();
    console.log("dropped");
    let files = Array.from(e.dataTransfer.files);
    files.forEach(el => barrita(el));
   }

    return ( 
        <section id="section14">
            <h2>Uploader Drag & Drop</h2>
            <main className="uploaderMain">
            <article ref={refArticle} onDragOver={handleOver} onDragLeave={handleLeave} onDrop={handleDrop} className="uploaderArticle">
                <h4 ref={refH4}>Drag your file here</h4>
            </article>
            {loaded && <progress value={loaded} max={100}></progress>}
            {file && <span>{file} -- {loaded}%</span>}
            </main>
        </section>
     );
}
 
export default Uploader;