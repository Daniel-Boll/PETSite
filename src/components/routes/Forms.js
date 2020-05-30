import React, {Component} from 'react';

import {Row, Col, Table, Card, Container, Button, Modal, Form} from 'react-bootstrap'
import {Edit, Delete} from '@material-ui/icons'

import Loading from '../widgets/Loading'

import DataHandler from '../../data/MemberDataHandler'
import DataHandlerP from '../../data/ProjectDataHandler'

import * as filestack from 'filestack-js';
class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalShowMember: false,
            modalShowProject: false,
            nomeP: '',
            descricaoP: '',
            nome: '',
            descricao: '',
            email: '',
            lattes: '',
            foto: '',
            fotoP: '',
            icv: {
                ano: '',
                titulo: '',
                orientador: '',
                descricao: ''
            },
            id: '',
            idP: '',
            members: [],
            projects: [],
            loading: true,
            edit: false,
            editP: false
        }
    }

    async componentDidMount() {
        let members = await DataHandler.getAllMembers();
        let projects = await DataHandlerP.getAllProjects();
        
        this.setState({
            loading: false,
            members,
            projects
        });
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
        window.alert("Petiano adicionado ao banco de dados");
        DataHandler.populateDatabase(this.state);
        this.componentDidMount();
    }

    handleUpdate = () => {
        window.alert("Petiano atualizado no banco de dados");
        DataHandler.updateDatabase(this.state);
        this.componentDidMount();
    }

    handleInsertProject = () => {
        window.alert("Projeto adicionado ao banco de dados");
        DataHandlerP.populateDatabase(this.state);
        this.componentDidMount();
    }

    handleUpdateProject = () => {
        window.alert("Projeto atualizado no banco de dados");
        DataHandlerP.updateDatabase(this.state);
        this.componentDidMount();
    }

    handleNameChangeProject = e => {
        this.setState({nomeP: e.target.value});
    }

    handleDescriptionChangeProject = e => {
        this.setState({descricaoP: e.target.value});
    }

    setModalShowMember = state => {
        if(!state)
            this.cleanMInfo();
        this.setState({
            modalShowMember: state
        })
    }
    
    setModalShowProject = state => {
        if(!state)
            this.cleanPInfo();
        this.setState({
            modalShowProject: state
        })
    }

    cleanMInfo = () => {
        this.setState({
            nome: '',
            descricao: '',
            email: '',
            lattes: '',
            foto: '',
            icv: {
                ano: '',
                titulo: '',
                orientador: '',
                descricao: ''            
            },
            edit: false,
            id: ''
        });
    }

    cleanPInfo = () => {
        this.setState({
            nomeP: '',
            descricaoP: '',
            fotoP: '',
            editP: false,
            idP: ''
        });
    }

    handleEditM = member => {
        this.setState({
            nome: member.nome,
            descricao: member.descricao,
            email: member.email,
            lattes: member.lattes,
            foto: member.foto,
            icv: {
                ano: member.icv.year,
                titulo: member.icv.title,
                orientador: member.icv.advisor,
                descricao: member.icv.description            
            },
            edit: true,
            id: member.id
        });
        this.setModalShowMember(true);
    }
    
    handleDelete = member => {
        var want = window.confirm("Quer mesmo deleter o membro "+ member.nome);

        if(want == (+[]-[]+!+[]*!+[]*!![]-![])){
            if(DataHandler.deleteMember(member.id)){
                alert("Petiano deletado");
                this.componentDidMount();
            }else{
                alert("Falha ao deletar petiano");
            }
        }
        else{
            alert("Operação cancelada");
        } 
    }

    handleEditP = project => {
        this.setState({
            nomeP: project.nome,
            descricaoP: project.descricao,
            fotoP: project.foto,
            editP: true,
            idP: project.id
        });
        this.setModalShowProject(true);
    }
    
    handleDeleteP = project => {
        var want = window.confirm("Quer mesmo deleter o projeto "+ project.nome);

        if(want == (+[]-[]+!+[]*!+[]*!![]-![])){
            if(DataHandlerP.deleteProject(project.id)){
                alert("Projeto deletado");
                this.componentDidMount();
            }else{
                alert("Falha ao deletar projeto");
            }
        }
        else{
            alert("Operação cancelada");
        } 
    }


    uploadImage = () => {
        const apikey = 'ApvO7wrqsQeWNVacJ2GJcz';
        const client = filestack.init(apikey);
        const options = {
            maxFiles: 70,
            uploadInBackground: false,
            onOpen: () => console.log('opened!'),
            onUploadDone: (res) => {
                let url = res.filesUploaded[0].url
                this.setState({foto: url});
            }
        };
        client.picker(options).open();
    }

    uploadImageP = () => {
        const apikey = 'ApvO7wrqsQeWNVacJ2GJcz';
        const client = filestack.init(apikey);
        const options = {
            maxFiles: 70,
            uploadInBackground: false,
            onOpen: () => console.log('opened!'),
            onUploadDone: (res) => {
                let url = res.filesUploaded[0].url
                this.setState({fotoP: url});
            }
        };
        client.picker(options).open();
    }

    render() {
        const {modalShowMember, modalShowProject} = this.state;
        const {members, projects} = this.state;
        
        if (this.state.loading) {
            return (
                <Container>
                    <Loading/>
                </Container>
            );
        }
        return (
            <>
            <Row xs={1} md={2}>
                <Col>

                </Col>
                <Col xs={10}>
                    <div align="center">
                        <Card>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div align="center"><h1>MEMBROS</h1><br></br><Button variant="success" onClick={() => this.setModalShowMember(true)}>Novo Membro</Button></div><br></br>
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nome</th>
                                                        <th>Descrição</th>
                                                        <th>E-mail</th>
                                                        <th>Lattes</th>
                                                        <th>Editar</th>
                                                        <th>Excluir</th>
                                                    </tr>
                                                </thead>
                                                {members
                                                    .map((member, index) => (<>
                                                        <tbody>
                                                            <td>{index}</td>
                                                            <td>{member.nome}</td>
                                                            <td>{member.descricao}</td>
                                                            <td>{member.email}</td>
                                                            <td>{member.lattes}</td>
                                                            <td><Edit className="Edit" onClick={() => this.handleEditM(member)}/></td>
                                                            <td><Delete className="Delete"  onClick={() => this.handleDelete(member)}/></td>
                                                        </tbody>
                                                 </>))}
                                            </Table>
                                        </Col>
                                        <Col>
                                            <div align="center"><h1>PROJETOS</h1><br></br><Button variant="success" onClick={() => this.setModalShowProject(true)}>Novo Projeto</Button></div><br></br>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nome</th>
                                                        <th>Descrição</th>
                                                        <th>Editar</th>
                                                        <th>Excluir</th>
                                                    </tr>
                                                </thead>
                                                {projects
                                                    .map((project, index) => (<>
                                                        <tbody>
                                                            <td>{index}</td>
                                                            <td>{project.nome}</td>
                                                            <td>{project.descricao}</td>
                                                            <td><Edit className="Edit" onClick={() => this.handleEditP(project)}/></td>
                                                            <td><Delete className="Delete"  onClick={() => this.handleDeleteP(project)}/></td>
                                                        </tbody>
                                                 </>))}
                                            </Table>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* Modal de Membros */}
                    <Modal
                        show={modalShowMember}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Inserir Novo Membro
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div align="center">
                                <Form>
                                    {/* Campo do nome */}
                                    <Form.Group controlId="formNome">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nome do Petiano"
                                            value={this.state.nome}
                                            onChange={this.handleNameChange}
                                        />
                                    </Form.Group>
                                    {/* Campo da Descrição */}
                                    <Form.Group controlId="formDescricao">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Descrição do Petiano"
                                            value={this.state.descricao}
                                            onChange={this.handleDescriptionChange}
                                        />
                                    </Form.Group>
                                    {/* Campo do E-mail */}
                                    <Form.Group controlId="formEmail">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="E-mail do Petiano"
                                            value={this.state.email}
                                            onChange={this.handleEmailChange}
                                        />
                                    </Form.Group>
                                    {/* Campo do Lattes */}
                                    <Form.Group controlId="formLattes">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Link para o lattes do Petiano"
                                            value={this.state.lattes}
                                            onChange={this.handleLattesChange}
                                        />
                                    </Form.Group>
                                    <h1>ICV</h1>
                                    {/* Campo do ICV */}
                                    <Form.Group controlId="formLattes">
                                        <Form.Row>
                                            <Col>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Ano de realização do ICV"
                                                    value={this.state.icv.ano}
                                                    onChange={this.handleICVYearChange}
                                                />
                                            </Col>
                                            <br></br><br></br>
                                            <Col>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Título do ICV"
                                                    value={this.state.icv.titulo}
                                                    onChange={this.handleICVTitleChange}
                                                />
                                            </Col>
                                        </Form.Row>

                                        <Form.Row>
                                            <Col>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Orientador do ICV"
                                                    value={this.state.icv.orientador}
                                                    onChange={this.handleICVAdvisorChange}
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Descrição do ICV"
                                                    value={this.state.icv.descricao}
                                                    onChange={this.handleICVDescriptionChange}
                                                />
                                            </Col>
                                        </Form.Row><br></br>
                                    <Button variant="success" onClick={this.uploadImage}>
                                        Upload Imagem
                                    </Button>
                                    </Form.Group>
                                    {(this.state.edit) 
                                    ? <Button variant="success" onClick={this.handleUpdate}>Atualizar Petiano</Button>
                                    : <Button variant="success" onClick={this.handleInsert}>Cadastrar Petiano</Button>
                                    } 
                                </Form>

                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.setModalShowMember(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal Projeto */}
                    <Modal
                        show={modalShowProject}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Inserir Novo Projeto
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div align="center">
                                <Form>
                                    {/* Campo do nome */}
                                    <Form.Group controlId="formNomeProjeto">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nome do Projeto"
                                            value={this.state.nomeP}
                                            onChange={this.handleNameChangeProject}
                                        />
                                    </Form.Group>
                                    {/* Campo da Descrição */}
                                    <Form.Group controlId="formDescricaoProjeto">
                                        <Form.Control
                                            required
                                            type="text"
                                            value={this.state.descricaoP}
                                            placeholder="Descrição do Projeto"
                                            onChange={this.handleDescriptionChangeProject}
                                        />
                                    </Form.Group>
                                    <Button variant="success" onClick={this.uploadImageP}>
                                        Upload Imagem
                                    </Button>
                                    {(this.state.editP) 
                                    ? <Button variant="success" onClick={this.handleUpdateProject}>Atualizar Projeto</Button>
                                    : <Button variant="success" onClick={this.handleInsertProject}>Cadastrar Projeto</Button>
                                    } 
                                </Form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.setModalShowProject(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col>
                    
                </Col>
            </Row>
            </>
        )
    }
}

export default Forms;