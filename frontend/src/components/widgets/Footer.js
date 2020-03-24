import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Facebook, Instagram, GitHub, WhatsApp, YouTube} from '@material-ui/icons';


class Footer extends Component {
    render() {
        return (
            <>
                <Row onLoad={this.handleLoad}>
                    <Col>
                        <div>
                            <div align="center">
                                <h1 style={{color: "white"}}>Alguma dúvida? Entre em contato.</h1>
                            </div>
                        </div>
                    </Col>    
                </Row><br></br><br></br><br></br>
                <Row>
                    <Col>
                        <div>
                            <div align="center">
                                <a href="https://facebook.com/petcomp"><Facebook style={{color: "white", fontSize: 30}}/></a>{' '}
                                <a href="https://instagram.com/petcomp_unioeste"><Instagram style={{color: "white", fontSize: 30}}/></a>{' '}
                                <a href="https://github.com/petcomp-unioeste"><GitHub style={{color: "white", fontSize: 30}}/></a>{' '}
                                <a href="https://www.youtube.com/channel/UC7c6zwLrLbuqVa4sjUn20Jg"><YouTube style={{color: "white", fontSize: 30}}/></a>{' '}
                            </div>
                        </div>
                    </Col>    
                </Row><br></br>
                <Row>
                    <Col>
                        <div>
                            <div align="center">
                                <p style={{color: "white"}}>Rua Universitária, 1619. Cascavel, PR. Brasil. Bloco F, Sala 15</p>
                            </div>
                        </div>
                    </Col> 
                </Row>
                <Row>
                    <Col>
                        <div>
                            <div align="center">
                                <p style={{color: "white"}}><b>Unioeste - PETComp</b></p>
                            </div>
                        </div>
                    </Col> 
                </Row>                
            </>
        )
    }
}

export default Footer;