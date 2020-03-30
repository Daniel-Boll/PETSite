import React, {Component} from 'react'
import { Container } from "react-bootstrap";
import NavBar from '../widgets/NavBar';
import Footer from '../widgets/Footer';
import ProjectContent from '../widgets/pagesContent/ProjectContent';
import '../../css/App.css';

class Member extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingLeft: 24, paddingTop: 24 }}>
                    <NavBar/>
                </Container>

                <Container style={{ paddingLeft: 0, paddingRight: 0}}>
                    <ProjectContent/>
                </Container>

                <Container style={{ paddingLeft: 0, paddingRight: 0}}>
                    <Footer/>
                </Container>
            </>
        )
    }
}

export default Member;