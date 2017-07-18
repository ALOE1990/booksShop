import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

class Contacts extends Component{
    render(){
        return(
            <div className = "container">
                <Panel header="Email:" bsStyle="info">
                    <a href="mailto:pangaojob@gmail.com">pangaojob@gmail.com</a>
                </Panel>
                <Panel header="LinkedIn:" bsStyle="info">
                    <a href="http://www.linkedin.com/in/pangaopublic">www.linkedin.com/in/pangaopublic</a>
                </Panel>
            </div>
        )
    }
}

export default Contacts