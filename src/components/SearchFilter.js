import React, {useState, useRef, useEffect} from 'react';


const SearchFilter = () => {
    let refArticle = useRef();
    let refInput = useRef();
    const [input, setInput] = useState("");

    const handleChange = (e) =>{
       setInput(e.target.value);
    }
    
    useEffect(() => {
        refArticle.current.querySelectorAll(".card").forEach(el => el.textContent.toLowerCase().includes(input.toLowerCase()) ? 
        el.classList.remove("filter") : el.classList.add("filter"))
    }, [input]);

    useEffect(() => {
        document.addEventListener("search", e=>{
            if(e.target === refInput.current){
                refArticle.current.querySelectorAll(".card").forEach(el => el.classList.remove("filter"))
            }
        })
    }, []);
   

    return ( 

    <section id="section9">
    <h2> Search Filter </h2>
    <input type="search" placeholder="Search" onChange={handleChange} value={input}/>
    <br/>
    <br/>


    <article className="cards" ref={refArticle}>
       <figure className="card">
        <img src="https://placeimg.com/200/200/tech" alt="Tech"/>
        <figcaption> Tech </figcaption>
       </figure>
       <figure className="card">
        <img src="https://placeimg.com/200/200/nature" alt="Nature"/>
        <figcaption> Nature </figcaption>
       </figure>
       <figure className="card">
        <img src="https://placeimg.com/200/200/any" alt="Any"/>
        <figcaption> Any </figcaption>
       </figure>
       <figure className="card">
        <img src="https://placeimg.com/200/200/people" alt="People"/>
        <figcaption> People </figcaption>
       </figure>
       <figure className="card">
        <img src="https://placeimg.com/200/200/arch" alt="Arch"/>
        <figcaption> Architecture </figcaption>
       </figure>
       <figure className="card">
        <img src="https://placeimg.com/200/200/animals" alt="Animals"/>
        <figcaption> Animals </figcaption>
       </figure>
    </article>
   </section>
     );
}
 
export default SearchFilter;