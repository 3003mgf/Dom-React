import React, {useState} from 'react';

const initialForm = {
    url: "",
    width: "",
    height: ""
};

let win;
const ResponsiveTester = () => {

    const [form, setForm] = useState(initialForm);
   


    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        win = window.open(`https://${form.url}`, "wOpen", `innerWidth = ${form.width}, innerHeight = ${form.height}`);
    };

    const handleClose = (e) =>{
       win.close();
    }

    return ( 
        <section id="section5">
        <div>
            <h2>Responsive Tester</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="url" placeholder="URL" onChange={handleChange} value={form.url} required/>
                <input type="text" name="width" placeholder="Width" onChange={handleChange} value={form.width} required/>
                <input type="text" name="height" placeholder="Height" onChange={handleChange} value={form.height} required/>
                <br/><br/>
                <input type="submit" value="Open"/>
                <input type="button" value="Close" onClick={handleClose}/>
            </form>
        </div>
        </section>
     );
}
 
export default ResponsiveTester;