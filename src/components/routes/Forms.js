import React, {Component, useState} from 'react';
import {Row, Col, Form, Button, Modal} from 'react-bootstrap'
import DataHandler from '../../data/MemberDataHandler'

class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            descricao: '',
            email: '',
            lattes: '',
            icv: {
                ano: '',
                titulo: '',
                orientador: '',
                descricao: ''
            }
        }
    }

    handleNameChange = e => {
        this.setState({nome: e.target.value});
    }

    handleDescriptionChange = e => {
        this.setState({descricao: e.target.value});
    }

    handleEmailChange = e => {
        this.setState({email: e.target.value});
    }

    handleLattesChange = e => {
        this.setState({lattes: e.target.value});
    }
    
    handleICVYearChange = e => {
        let icvLevel = this.state.icv;
        icvLevel.ano = e.target.value;
        this.setState({icvLevel});
    }
    
    handleICVTitleChange = e => {
        let icvLevel = this.state.icv;
        icvLevel.titulo = e.target.value;
        this.setState({icvLevel});
    }
    handleICVAdvisorChange = e => {
        let icvLevel = this.state.icv;
        icvLevel.orientador = e.target.value;
        this.setState({icvLevel});
    }
    handleICVDescriptionChange = e => {
        let icvLevel = this.state.icv;
        icvLevel.descricao = e.target.value;
        this.setState({icvLevel});
    }

    handleInsert = () => {
        console.table("Nome: "+this.state.nome);
        console.table("Descricao: "+this.state.descricao);
        console.table("Email: "+this.state.email);
        console.table("Lattes: "+this.state.lattes);
        
        window.alert("Petiano adicionado ao banco de dados");
        DataHandler.populateDatabase(this.state);
    }

  
    
    render() {
        return (
            <>
            <Row xs={1} md={2}>
                <Col style={{maxWidth: "50vw"}}>

                </Col>
                <Col>
                    <div align="center">

                        <h1 align="center" style={{color: "white", fontSize: "40px"}}>Adicionar Petiano</h1>
                        <br></br>
                        <Form>
                            {/* Campo do nome */}
                            <Form.Group controlId="formNome">
                                <Form.Label style={{color: "white"}}>Nome</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nome do Petiano"
                                    onChange={this.handleNameChange}
                                />
                            </Form.Group>
                            {/* Campo da Descrição */}
                            <Form.Group controlId="formDescricao">
                                <Form.Label style={{color: "white"}}>Descrição</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Descrição do ICV do Petiano"
                                    onChange={this.handleDescriptionChange}
                                />
                            </Form.Group>
                            {/* Campo do E-mail */}
                            <Form.Group controlId="formEmail">
                                <Form.Label style={{color: "white"}}>E-mail</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="E-mail do Petiano"
                                    onChange={this.handleEmailChange}
                                />
                            </Form.Group>
                            {/* Campo do Lattes */}
                            <Form.Group controlId="formLattes">
                                <Form.Label style={{color: "white"}}>Lattes</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Link para o lattes do Petiano"
                                    onChange={this.handleLattesChange}
                                />
                            </Form.Group>
                            <h1 style={{color: "white"}}>ICV</h1>
                            {/* Campo do ICV */}
                            <Form.Group controlId="formLattes">
                                <Form.Row>
                                    <Col>
                                        <Form.Label style={{color: "white"}}>Ano</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Ano de realização do ICV"
                                            onChange={this.handleICVYearChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{color: "white"}}>Título</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Título do ICV"
                                            onChange={this.handleICVTitleChange}
                                        />
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Col>
                                        <Form.Label style={{color: "white"}}>Orientador</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Orientador do ICV"
                                            onChange={this.handleICVAdvisorChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label style={{color: "white"}}>Descrição</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Descrição do ICV"
                                            onChange={this.handleICVDescriptionChange}
                                        />
                                    </Col>
                                </Form.Row>
                                
                            </Form.Group>
                            <Button variant="success" onClick={this.handleInsert}>
                                Cadastrar Petiano
                            </Button>
                        </Form>

                    </div>
                </Col>
                <Col>
                    
                </Col>
            </Row>
            </>
        )
    }
}

export default Forms;