import React, {Component} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {Zoom} from '@material-ui/core'
import Logo from './subContent/Logo'
import PETD from './subContent/PETD'
import PETIcons from './subContent/PETIcons'
import '../../css/App.css';

class HomeContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: '',
            align: '',
            display: ''
        }
    }

    async componentDidMount() {
        this.setState({
            checked: false,
            align: "left",
            display: 100
        });
        window.addEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        if(window.innerWidth < 515){
            this.setState({
                align: "center",
                display: 0
            });
        }else{
            this.setState({
                align: "left",
                display: 100
            });
        }
    }

    handleLoad = () => {
        this.setState({
            checked: true
        })
        this.updateDimensions();
    }

    render() {
        const {checked, align, display} = this.state
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
                            <br></br>

                            <Zoom in={checked} style={{transitionDelay: checked ? '750ms' : '0ms'}}>
                                <Container>
                                    <Row>
                                        <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                                            {/* PET description */}
                                            <PETD/>
                                        </Col>       
                                    </Row>  
                                </Container> 
                            </Zoom>     
                        </div>       
                    </Col>
                </Row>
                <br></br><br></br><br></br><br></br><br></br>
                <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Row xs={1} md={2}>
                        <Col>
                            {/* O alinhamento da div é alterado quando passa de determinado tamanho */}
                            <div align={align} style={{minWidth: "330px", maxHeight:"450px"}}>
                                <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
                                    <Container>
                                        {/* What is PET */}
                                        <div style={{maxWidth: "300px"}} align="left">   
                                            <h1 align={align} style={{color: "white"}}>O que é?</h1>
                                            <p style={{color: "white"}}>
                                                O PET Ciência da Computação (PETComp) foi criado em dezembro de 2010 e é o 5º Grupo PET da UNIOESTE (1º do campus de Cascavel), destinado exclusivamente aos alunos regularmente matriculados no Curso. Sua aprovação junto ao MEC foi uma conquista do Prof. Dr. Clodis Boscarioli, muito bem recebida, após 5 tentativas de submissão de projeto por parte de vários professores.
                                            </p>
                                        </div>
                                    </Container>
                                </Zoom>
                            </div>
                        </Col>
                        <Col>
                            {/* Ícones */}
                            <br></br>
                            {/* Opacity é alterada pra 0 quando passa de uma determinado tamanho, então deixam de ser mostrados */}

                            <div style={{opacity: display}}>
                                <Zoom in={checked} style={{transitionDelay: checked ? '1250ms' : '0ms'}}>
                                    <Container>
                                        <PETIcons/>
                                    </Container>
                                </Zoom>
                            </div>
                        </Col>

                    </Row>
                </Container>
                <br></br><br></br><br></br><br></br><br></br>
                <Container style={{ paddingLeft: 0, paddingRight: 0, flexDirection: "row"}}>
                    <Row xs={1} md={2}>
                        <Col>
                            {/* Projeto, pesquisa e extenção */}
                            <div>
                                <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
                                    <Container>
                                        <div align="center">
                                            <div style={{maxWidth: "300px"}} align="left">   
                                                <h1 align={align} style={{color: "white"}}>Pesquisa</h1>
                                                <p style={{color: "white"}}>
                                                    Para incentivar a pesquisa, no PET, todos os membros devem ter um projeto de iniciação cientifica.
                                                </p>
                                            </div>
                                        </div>
                                    </Container>
                                </Zoom>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
                                    <Container>
                                        <div style={{maxWidth: "300px"}} align="left">   
                                            <h1 align={align} style={{color: "white"}}>Ensino</h1>
                                            <p style={{color: "white"}}>
                                                O PET organiza eventos para compartilhar e adquirir conhecimento, como minicursos e palestras, que são abertos para os membros do PET e para os acadêmicos do curso de ciência da computação.
                                            </p>
                                        </div>
                                    </Container>
                                </Zoom>
                            </div>
                        </Col>
                        <Col>
                        <div>
                            <Zoom in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms'}}>
                                <Container>
                                    <div style={{maxWidth: "300px"}} align="left">   
                                        <h1 align={align} style={{color: "white"}}>Extensão</h1>
                                        <p style={{color: "white"}}>
                                            Entre os projetos que o PET realiza, existem os projetos de extensão, que estabelecem uma conexão com a comunidade.
                                        </p>
                                    </div>
                                </Container>
                            </Zoom>
                        </div>
                        </Col>
                    </Row>
                </Container><br></br><br></br><br></br><br></br>
            </>
        )
    }
}

export default HomeContent;