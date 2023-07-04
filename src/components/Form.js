import React, {useState} from 'react';
import Swal from 'sweetalert2';
import Modal from './Modal';

const validationForm = (form) =>{
    let obj = {};
    let regExName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü.\s]+$/;
    let regExEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regExComments = /^.{1,255}$/;
    
    if(!regExName.test(form.Name.trim())){
      obj.Name = "Name only accepts [A-Z a-z ñÑ]";
    }else if(!regExEmail.test(form.Email.trim())){
      obj.Email = "Invalid email format";
    }else if(!regExComments.test(form.Message)){
      obj.Message = "Your message can not exceed 255 characters"
    }


    return obj;
}

const initialForm = {
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
}

const Form = () => {

    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleBlur = (e) =>{
        handleChange(e);
        setError(validationForm(form));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let options = {
            headers: {
                "Content-Type": "application/json;"
            },
            method: "POST",
            body: JSON.stringify(form)
        };
        
        if(error.Name || error.Email || error.Message){
            Swal.fire({
                icon: "warning",
                title: "Error",
                text: "Please verify all fields in the form.",
            });
            return;
        }


            fetch("https://formsubmit.co/ajax/gramajofeijoonacho@gmail.com", options)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => console.log(data))
            .catch(err => console.log(err));
    
    }
    
    return ( 
        <section id="section12">
            <form onSubmit={handleSubmit}>
               <legend> What you thinking? 💭 </legend>

                <input type="text" name="Name" placeholder="Write your name" onChange={handleChange} value={form.Name} onBlur={handleBlur}/>
                
                <input type="text" name="Email" placeholder="Write your email"  onChange={handleChange} value={form.Email} onBlur={handleBlur}/>
                
                <input type="text" name="Subject" placeholder="Subject"  onChange={handleChange} value={form.Subject} onBlur={handleBlur}/>
                
                <textarea name="Message" cols="50" rows="10"  placeholder="Tell us..." onChange={handleChange} value={form.Message} onBlur={handleBlur}></textarea>
                <br/>
                <input type="submit" value="Send" />
                <input type="button" onClick={()=> setIsOpen(true)} style={{cursor: "pointer"}} value="Information"/>
            </form>
                {isOpen && 
                <Modal setIsOpen={setIsOpen}>
                    <h2>Valid Patterns</h2>
                    <h3 style={{color: "palevioletred", textDecoration: "underline"}}>Name</h3>
                    <p>Only accepts [A-Za-zñÑ]</p>
                    <br/>
                    <h3 style={{color: "palevioletred", textDecoration: "underline"}}>Email</h3>
                    <p className="parrafo-li">Email only accepts valid email formats, such as:
                        <li>youremail@gmail.com</li>
                        <li>youremail@outlook.com</li>
                        <li>youremail@hotmail.com</li>
                        <li>Etc</li>

                        Any other domain will be accepted.
                        No capital letters allowed.
                    </p>
                    <br/>
                    <h3 style={{color: "palevioletred",  textDecoration: "underline"}}>Message</h3>
                    <p>Can not exceed 255 characters. If you need to send us a larger message we encourage you to contact us at our official email <b>myemail@gmail.com</b></p>
                        
                </Modal>}
        </section>
     );
}
 
export default Form;