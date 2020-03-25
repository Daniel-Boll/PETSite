import React, {Component} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {Zoom} from '@material-ui/core'
import Logo from '../widgets/subContent/Logo'
import '../../css/App.css';

class NotFoundContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: ''
        }
    }

    async componentDidMount() {
        this.setState({
            checked: false
        });
    }

    handleLoad = () => {
        this.setState({
            checked: true
        })
    }

    render() {
        const {checked} = this.state
        return (
            <>
                <Row onLoad={this.handleLoad} xs={1} md={2}>
                    <Col>
                        <div>
                            <Zoom in={checked} style={{transitionDelay: checked ? '500ms' : '0ms'}}>
                                <Container>
                                    <Row>
                                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <Logo/>
                                        </Col>       
                                    </Row>  
                                </Container> 
                            </Zoom>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Zoom in={checked} style={{transitionDelay: checked ? '750ms' : '0ms'}}>
                                <Container>
                                    <Row>
                                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            <h1 align="center" style={{color: "white"}}>Página não encontrada!</h1>
                                        </Col>       
                                    </Row>  
                                </Container> 
                            </Zoom>     
                        </div>       
                    </Col>
                </Row>
            </>
        )
    }
}

export default NotFoundContent;