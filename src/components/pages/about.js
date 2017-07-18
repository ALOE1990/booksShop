import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';

class About extends Component{
    render(){
        return(
            <Jumbotron>
                <h1>Welcome to Pan's Book Store!</h1>
                <p>This is a project by Pan to have a better understand about React, Redux and MongoDB. If you are intereted about it or about Pan, please contact me by pangaojob@gmail.com</p>
            </Jumbotron>
        )
    }
}

export default About