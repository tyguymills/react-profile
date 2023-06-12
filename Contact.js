import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from "react"
import './component-styles.css';

function Contact(props){
    //same as my regex assignment
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  
    function handleSubmit(e){
        e.preventDefault();
        if(emailInput && emailInput.length && emailInput.match(emailRegex)){
            console.log("success")
        } else if (!emailInput || !nameInput || !queryInput){
            alert("Please fill in all fields and try again.")
        } else if (!emailInput.match(emailRegex)){
            alert("Please input a valid email address.")
        } 
    }

    return(
        <div className = "col-7">
            <h1 class = "sectionTitle">Contact</h1>

            <form className='row mx-3 mt-3 contactSection"'>
                <div>
                    

                    <Button onClick={handleSubmit}>Submit</Button>

                    
                </div>
            </form>
        </div>
    )
}

export default Contact