import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './component-styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Project from "./Project.js"





function Portfolio(props){

    const projectData = [
        {
           
        },
    ]

    return(
        <div>
            <h1 class = "sectionTitle">Portfolio</h1>

            <div>
                {projectData.map(project => {
                    return(
                        <div>
                            <Project project = {project}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio