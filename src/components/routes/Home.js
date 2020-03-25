import React, {Component} from 'react'
import { Container } from "react-bootstrap";
import NavBar from '../widgets/NavBar';
import HomeContent from '../widgets/HomeContent';
import Footer from '../widgets/Footer';
import '../../css/App.css';

class Home extends Component {
    render() {

        return (
            <>
                <Container style={{ paddingLeft: 24, paddingTop: 24 }}>
                    <NavBar/>
                </Container>

                <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <HomeContent/>
                </Container>

                <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Footer/>
                </Container>
            </>
        )
    }
}

export default Home;