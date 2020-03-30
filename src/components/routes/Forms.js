import React, {Component} from 'react';
import {Row, Col, Table, Card, Container, Button, Modal, Form} from 'react-bootstrap'
import {Edit} from '@material-ui/icons'
import Loading from '../widgets/Loading'
import DataHandler from '../../data/MemberDataHandler'
import DataHandlerP from '../../data/ProjectDataHandler'

class Forms extends Component {
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
            icv: {
                ano: '',
                titulo: '',
                orientador: '',
                descricao: ''
            },
            members: [],
            projects: [],
            loading: true
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
    }

    handleInsertProject = () => {
        window.alert("Projeto adicionado ao banco de dados");
        DataHandlerP.populateDatabase(this.state);
    }

    handleNameChangeProject = e => {
        this.setState({nomeP: e.target.value});
    }

    handleDescriptionChangeProject = e => {
        this.setState({descricaoP: e.target.value});
    }

    setModalShowMember = state => {
        this.setState({
            modalShowMember: state
        })
    }
    
    setModalShowProject = state => {
        this.setState({
            modalShowProject: state
        })
    }
    
    render() {
        const {modalShowMember, modalShowProject} = this.state;
        const {members, projects} = this.state
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
                                                            <td><Edit/></td>
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
                                                    </tr>
                                                </thead>
                                                {projects
                                                    .map((project, index) => (<>
                                                        <tbody>
                                                            <td>{index}</td>
                                                            <td>{project.nome}</td>
                                                            <td>{project.descricao}</td>
                                                            <td><Edit/></td>
                                                        </tbody>
                                                 </>))}
                                            </Table>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </div>
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
                                            onChange={this.handleNameChange}
                                        />
                                    </Form.Group>
                                    {/* Campo da Descrição */}
                                    <Form.Group controlId="formDescricao">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Descrição do ICV do Petiano"
                                            onChange={this.handleDescriptionChange}
                                        />
                                    </Form.Group>
                                    {/* Campo do E-mail */}
                                    <Form.Group controlId="formEmail">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="E-mail do Petiano"
                                            onChange={this.handleEmailChange}
                                        />
                                    </Form.Group>
                                    {/* Campo do Lattes */}
                                    <Form.Group controlId="formLattes">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Link para o lattes do Petiano"
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
                                                    onChange={this.handleICVYearChange}
                                                />
                                            </Col>
                                            <br></br><br></br>
                                            <Col>
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
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Orientador do ICV"
                                                    onChange={this.handleICVAdvisorChange}
                                                />
                                            </Col>
                                            <Col>
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
                                            onChange={this.handleNameChangeProject}
                                        />
                                    </Form.Group>
                                    {/* Campo da Descrição */}
                                    <Form.Group controlId="formDescricaoProjeto">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Descrição do Projeto"
                                            onChange={this.handleDescriptionChangeProject}
                                        />
                                    </Form.Group>
                                    <Button variant="success" onClick={this.handleInsertProject}>
                                        Cadastrar Projeto
                                    </Button>
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