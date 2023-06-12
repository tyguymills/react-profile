import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"
//fontawesome
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(props){
    return(
        <>
            <a href = " className='footerLink'>LinkedIn <FaLinkedin id='linkedinIcon'/></a>
            <a href = "" className='footerLink'>GitHub <FaGithub id="githubIcon"/></a>
        </>
    )
}

export default Footer