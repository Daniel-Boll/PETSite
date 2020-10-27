import React, { Component, useState } from "react";

import {
  Row,
  Col,
  Table,
  Card,
  Container,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Edit, Delete } from "@material-ui/icons";

import Loading from "../widgets/Loading";

import DataHandler from "../../data/MemberDataHandler";
import DataHandlerP from "../../data/ProjectDataHandler";

import * as filestack from "filestack-js";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShowMember: false,
      modalShowProject: false,
      modalShowFaq: false,
      modalShowPolygon: false,
      nomeP: "",
      descricaoP: "",
      nome: "",
      descricao: "",
      email: "",
      lattes: "",
      foto: "",
      fotoP: "",
      icv: {
        ano: "",
        titulo: "",
        orientador: "",
        descricao: "",
      },
      faq: {
        city: "",
        ycs: "",
        ifncs: "",
        aa: "",
        hp: "",
        bk: "",
        mv: "",
        gm: "",
        mc: "",
        fd: "",
      },
      polygon: {
        option_1: "",
        value_1: "",
        option_2: "",
        value_2: "",
        option_3: "",
        value_3: "",
        option_4: "",
        value_4: "",
        option_5: "",
        value_5: "",
      },
      id: "",
      idP: "",
      members: [],
      projects: [],
      loading: true,
      edit: false,
      editP: false,
      urlP: "",
      old: "",
      oldP: "",
    };
  }

  async componentDidMount() {
    let members = await DataHandler.getAllMembers();
    let projects = await DataHandlerP.getAllProjects();
    this.setState({
      loading: false,
      members,
      projects,
    });
  }

  handleNameChange = (e) => {
    this.setState({ nome: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ descricao: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleLattesChange = (e) => {
    this.setState({ lattes: e.target.value });
  };

  handleICVYearChange = (e) => {
    let icvLevel = this.state.icv;
    icvLevel.ano = e.target.value;
    this.setState({ icvLevel });
  };

  handleICVTitleChange = (e) => {
    let icvLevel = this.state.icv;
    icvLevel.titulo = e.target.value;
    this.setState({ icvLevel });
  };

  handleICVAdvisorChange = (e) => {
    let icvLevel = this.state.icv;
    icvLevel.orientador = e.target.value;
    this.setState({ icvLevel });
  };

  handleICVDescriptionChange = (e) => {
    let icvLevel = this.state.icv;
    icvLevel.descricao = e.target.value;
    this.setState({ icvLevel });
  };

  handleFAQcity = (e) => {
    let faqLevel = this.state.faq;
    faqLevel.city = e.target.value;
    this.setState({ faqLevel });
  };

  handleFAQycs = (e) => {
    let faqLevel = this.state.faq;
    faqLevel.ycs = e.target.value;
    this.setState({ faqLevel });
  };

  handleFAQifncs = (e) => {
    let faqLevel = this.state.faq;
    faqLevel.ifncs = e.target.value;
    this.setState({ faqLevel });
  };

  handleFAQaa = (e) => {
    let faqLevel = this.state.faq;
    faqLevel.aa = e.target.value;
    this.setState({ faqLevel });
  };

  handleFAQhp = (e) => {
    let faqLevel = this.state.faq;
    faqLevel.hp = e.target.value;
    this.setState({ faqLevel });
  };

  handleFAQbk = (e) => {
    let faqLevel = this.state.faq;
    faqLevel.bk = e.target.value;
    this.setState({ faqLevel });
  };

  handleFAQmv = (e) => {
    let faqLevel = this.state.faq;
    faqLevel.mv = e.target.value;
    this.setState({ faqLevel });
  };

  handleFAQgm = (e) => {
    let faqLevel = this.state.faq;
    faqLevel.gm = e.target.value;
    this.setState({ faqLevel });
  };

  handleFAQmc = (e) => {
    let faqLevel = this.state.faq;
    console.log("Called dude");
    faqLevel.mc = e.target.value;
    this.setState({ faqLevel });
  };

  handleFAQfd = (e) => {
    let faqLevel = this.state.faq;
    faqLevel.fd = e.target.value;
    this.setState({ faqLevel });
  };

  handlePolygonOption_1 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.option_1 = e.target.value;
    this.setState({ polygonLevel });
  };

  handlePolygonValue_1 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.value_1 = e.target.value;
    this.setState({ polygonLevel });
  };

  handlePolygonOption_2 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.option_2 = e.target.value;
    this.setState({ polygonLevel });
  };

  handlePolygonValue_2 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.value_2 = e.target.value;
    this.setState({ polygonLevel });
  };

  handlePolygonOption_3 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.option_3 = e.target.value;
    this.setState({ polygonLevel });
  };

  handlePolygonValue_3 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.value_3 = e.target.value;
    this.setState({ polygonLevel });
  };

  handlePolygonOption_4 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.option_4 = e.target.value;
    this.setState({ polygonLevel });
  };

  handlePolygonValue_4 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.value_4 = e.target.value;
    this.setState({ polygonLevel });
  };

  handlePolygonOption_5 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.option_5 = e.target.value;
    this.setState({ polygonLevel });
  };

  handlePolygonValue_5 = (e) => {
    let polygonLevel = this.state.polygon;
    polygonLevel.value_5 = e.target.value;
    this.setState({ polygonLevel });
  };

  handleOldChange = (e) => {
    const as = e.target.checked ? "Sim" : "Não";
    this.setState({ old: as });
  };

  handleOldPChange = (e) => {
    const as = e.target.checked ? "Sim" : "Não";
    this.setState({ oldP: as });
  };

  handleInsert = () => {
    window.alert("Petiano adicionado ao banco de dados");
    // console.log(this.state);
    DataHandler.populateDatabase(this.state);
    this.componentDidMount();
  };

  handleUpdate = () => {
    window.alert("Petiano atualizado no banco de dados");
    // console.log(this.state);
    DataHandler.updateDatabase(this.state);
    this.componentDidMount();
  };

  handleInsertProject = () => {
    window.alert("Projeto adicionado ao banco de dados");
    DataHandlerP.populateDatabase(this.state);
    this.componentDidMount();
  };

  handleUpdateProject = () => {
    window.alert("Projeto atualizado no banco de dados");
    DataHandlerP.updateDatabase(this.state);
    this.componentDidMount();
  };

  handleNameChangeProject = (e) => {
    this.setState({ nomeP: e.target.value });
  };

  handleDescriptionChangeProject = (e) => {
    this.setState({ descricaoP: e.target.value });
  };

  handleUrlChangeProject = (e) => {
    this.setState({ urlP: e.target.value });
  };

  handleOldChangeProject = (e) => {
    this.setState({ oldP: e.target.value });
  };

  setModalShowMember = (state) => {
    if (!state) this.cleanMInfo();
    this.setState({
      modalShowMember: state,
    });
  };

  setModalShowProject = (state) => {
    if (!state) this.cleanPInfo();
    this.setState({
      modalShowProject: state,
    });
  };

  setModalShowFAQ = (state) => {
    this.setState({
      modalShowFaq: state,
    });
  };

  setModalShowPolygon = (state) => {
    this.setState({
      modalShowPolygon: state,
    });
  };

  cleanMInfo = () => {
    this.setState({
      nome: "",
      descricao: "",
      email: "",
      lattes: "",
      foto: "",
      icv: {
        ano: "",
        titulo: "",
        orientador: "",
        descricao: "",
      },
      faq: {
        city: "",
        ycs: "",
        ifncs: "",
        aa: "",
        hp: "",
        bk: "",
        mv: "",
        gm: "",
        mc: "",
        fd: "",
      },
      polygon: {
        option_1: "",
        value_1: "",
        option_2: "",
        value_2: "",
        option_3: "",
        value_3: "",
        option_4: "",
        value_4: "",
        option_5: "",
        value_5: "",
      },
      old: "",
      edit: false,
      id: "",
    });
  };

  cleanPInfo = () => {
    this.setState({
      nomeP: "",
      descricaoP: "",
      fotoP: "",
      editP: false,
      url: "",
      oldP: "",
      idP: "",
    });
  };

  handleEditM = (member) => {
    let old = member.old === "Sim" ? true : false;
    if (member.faq == null) {
      member.faq = {
        city: "",
        ycs: "",
        ifncs: "",
        aa: "",
        hp: "",
        bk: "",
        mv: "",
        gm: "",
        mc: "",
        fd: "",
      };
    }

    if (member.polygon == null) {
      member.polygon = {
        option_1: "",
        value_1: "",
        option_2: "",
        value_2: "",
        option_3: "",
        value_3: "",
        option_4: "",
        value_4: "",
        option_5: "",
        value_5: "",
      };
    }

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
        descricao: member.icv.description,
      },
      faq: {
        city: member.faq.city,
        ycs: member.faq.ycs,
        ifncs: member.faq.ifncs,
        aa: member.faq.aa,
        hp: member.faq.hp,
        bk: member.faq.bk,
        mv: member.faq.mv,
        gm: member.faq.gm,
        mc: member.faq.mc,
        fd: member.faq.fd,
      },
      polygon: {
        option_1: member.polygon.option_1,
        value_1: member.polygon.value_1,
        option_2: member.polygon.option_2,
        value_2: member.polygon.value_2,
        option_3: member.polygon.option_3,
        value_3: member.polygon.value_3,
        option_4: member.polygon.option_4,
        value_4: member.polygon.value_4,
        option_5: member.polygon.option_5,
        value_5: member.polygon.value_5,
      },
      old: old,
      edit: true,
      id: member.id,
    });
    this.setModalShowMember(true);
  };

  handleDelete = (member) => {
    var want = window.confirm("Quer mesmo deleter o membro " + member.nome);

    if (want == +[] - [] + !+[] * !+[] * !![] - ![]) {
      if (DataHandler.deleteMember(member.id)) {
        alert("Petiano deletado");
        this.componentDidMount();
      } else {
        alert("Falha ao deletar petiano");
      }
    } else {
      alert("Operação cancelada");
    }
  };

  handleEditP = (project) => {
    let old = project.old === "Sim" ? true : false;
    this.setState({
      nomeP: project.nome,
      descricaoP: project.descricao,
      fotoP: project.foto,
      url: project.url,
      oldP: old,
      editP: true,
      idP: project.id,
    });
    this.setModalShowProject(true);
  };

  handleDeleteP = (project) => {
    var want = window.confirm("Quer mesmo deleter o projeto " + project.nome);

    if (want == +[] - [] + !+[] * !+[] * !![] - ![]) {
      if (DataHandlerP.deleteProject(project.id)) {
        alert("Projeto deletado");
        this.componentDidMount();
      } else {
        alert("Falha ao deletar projeto");
      }
    } else {
      alert("Operação cancelada");
    }
  };

  uploadImage = () => {
    const apikey = "ApvO7wrqsQeWNVacJ2GJcz";
    const client = filestack.init(apikey);
    const options = {
      maxFiles: 70,
      uploadInBackground: false,
      onOpen: () => console.log("opened!"),
      onUploadDone: (res) => {
        let url = res.filesUploaded[0].url;
        this.setState({ foto: url });
      },
    };
    client.picker(options).open();
  };

  uploadImageP = () => {
    const apikey = "ApvO7wrqsQeWNVacJ2GJcz";
    const client = filestack.init(apikey);
    const options = {
      maxFiles: 70,
      uploadInBackground: false,
      onOpen: () => console.log("opened!"),
      onUploadDone: (res) => {
        let url = res.filesUploaded[0].url;
        this.setState({ fotoP: url });
      },
    };
    client.picker(options).open();
  };

  render() {
    const {
      modalShowMember,
      modalShowProject,
      modalShowFaq,
      modalShowPolygon,
    } = this.state;
    const { members, projects } = this.state;

    if (this.state.loading) {
      return (
        <Container>
          <Loading />
        </Container>
      );
    }
    return (
      <>
        <Row xs={1} md={1}>
          <Col></Col>
          <Col xs={10}>
            <div align="center">
              <Card>
                <Card.Body>
                  <Container>
                    <Row>
                      <Col>
                        <div align="center">
                          <h1>MEMBROS</h1>
                          <br></br>
                          <Button
                            variant="success"
                            onClick={() => this.setModalShowMember(true)}
                          >
                            Novo Membro
                          </Button>
                        </div>
                        <br></br>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Nome</th>
                              <th>Descrição</th>
                              <th>E-mail</th>
                              <th>Lattes</th>
                              <th>Old</th>
                              <th>Editar</th>
                              <th>Excluir</th>
                            </tr>
                          </thead>
                          {members.map((member, index) => (
                            <>
                              <tbody>
                                <td>{index}</td>
                                <td>{member.nome}</td>
                                <td>{member.descricao}</td>
                                <td>{member.email}</td>
                                <td>{member.lattes}</td>
                                <td>{member.old}</td>
                                <td>
                                  <Edit
                                    className="Edit"
                                    onClick={() => this.handleEditM(member)}
                                  />
                                </td>
                                <td>
                                  <Delete
                                    className="Delete"
                                    onClick={() => this.handleDelete(member)}
                                  />
                                </td>
                              </tbody>
                            </>
                          ))}
                        </Table>
                      </Col>
                      <Col>
                        <div align="center">
                          <h1>PROJETOS</h1>
                          <br></br>
                          <Button
                            variant="success"
                            onClick={() => this.setModalShowProject(true)}
                          >
                            Novo Projeto
                          </Button>
                        </div>
                        <br></br>
                        <Table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Nome</th>
                              <th>Descrição</th>
                              <th>Referência</th>
                              <th>Old</th>
                              <th>Editar</th>
                              <th>Excluir</th>
                            </tr>
                          </thead>
                          {projects.map((project, index) => (
                            <>
                              <tbody>
                                <td>{index}</td>
                                <td>{project.nome}</td>
                                <td>{project.descricao}</td>
                                <td>{project.url}</td>
                                <td>{project.old}</td>
                                <td>
                                  <Edit
                                    className="Edit"
                                    onClick={() => this.handleEditP(project)}
                                  />
                                </td>
                                <td>
                                  <Delete
                                    className="Delete"
                                    onClick={() => this.handleDeleteP(project)}
                                  />
                                </td>
                              </tbody>
                            </>
                          ))}
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
              onLoad={this.handleOldChange}
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
                    <Form.Group controlId="formICV">
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
                        <br></br>
                        <br></br>
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
                      </Form.Row>
                      <br></br>
                    </Form.Group>
                    {/* Campo para validar se é egresso ou não */}
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        label="É egresso?"
                        required
                        checked={this.state.old}
                        onChange={this.handleOldChange}
                      />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                      <>
                        {/* Modal Q&A */}
                        <Button
                          variant="success"
                          onClick={() => this.setModalShowFAQ(true)}
                        >
                          Modal Saiba Mais
                        </Button>

                        <Modal show={modalShowFaq}>
                          <Modal.Header closeButton>
                            <Modal.Title>Modal Saiba Mais</Modal.Title>
                          </Modal.Header>
                          <div align="center">
                            <Form>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Cidade onde nasceu"
                                  value={this.state.faq.city}
                                  onChange={this.handleFAQcity}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Por que Ciência da Computação? "
                                  value={this.state.faq.ycs}
                                  onChange={this.handleFAQycs}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Se não fizesse Ciência da Computação, o que faria? "
                                  value={this.state.faq.ifncs}
                                  onChange={this.handleFAQifncs}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Pretende seguir na área acadêmica?"
                                  value={this.state.faq.aa}
                                  onChange={this.handleFAQaa}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Hobby preferido:"
                                  value={this.state.faq.hp}
                                  onChange={this.handleFAQhp}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Livro preferido:"
                                  value={this.state.faq.bk}
                                  onChange={this.handleFAQbk}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Filme preferido:"
                                  value={this.state.faq.mv}
                                  onChange={this.handleFAQmv}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Jogo preferido:"
                                  value={this.state.faq.gm}
                                  onChange={this.handleFAQgm}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Música preferida:"
                                  value={this.state.faq.mc}
                                  onChange={this.handleFAQmc}
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Comida preferida:"
                                  value={this.state.faq.fd}
                                  onChange={this.handleFAQfd}
                                />
                              </Form.Group>
                            </Form>
                          </div>
                          <Modal.Footer>
                            <Button
                              variant="primary"
                              onClick={() => this.setModalShowFAQ(false)}
                            >
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        {/* ModalPolygon */}
                        <Button
                          variant="success"
                          onClick={() => this.setModalShowPolygon(true)}
                        >
                          Modal Polygon
                        </Button>

                        <Modal show={modalShowPolygon}>
                          <Modal.Header closeButton>
                            <Modal.Title>Modal Polygon</Modal.Title>
                          </Modal.Header>
                          <div align="center" style={{ padding: "4px 12px" }}>
                            <Form>
                              <Form.Group>
                                <Form.Row>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Título 1"
                                    value={this.state.polygon.option_1}
                                    onChange={this.handlePolygonOption_1}
                                  />
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Valor 1 (0.0 -> 1.0)"
                                    value={this.state.polygon.value_1}
                                    onChange={this.handlePolygonValue_1}
                                  />
                                </Form.Row>
                              </Form.Group>

                              <Form.Group>
                                <Form.Row>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Título 2"
                                    value={this.state.polygon.option_2}
                                    onChange={this.handlePolygonOption_2}
                                  />
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Valor 2 (0.0 -> 1.0)"
                                    value={this.state.polygon.value_2}
                                    onChange={this.handlePolygonValue_2}
                                  />
                                </Form.Row>
                              </Form.Group>

                              <Form.Group>
                                <Form.Row>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Título 3"
                                    value={this.state.polygon.option_3}
                                    onChange={this.handlePolygonOption_3}
                                  />
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Valor 3 (0.0 -> 1.0)"
                                    value={this.state.polygon.value_3}
                                    onChange={this.handlePolygonValue_3}
                                  />
                                </Form.Row>
                              </Form.Group>

                              <Form.Group>
                                <Form.Row>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Título 4"
                                    value={this.state.polygon.option_4}
                                    onChange={this.handlePolygonOption_4}
                                  />
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Valor 4 (0.0 -> 1.0)"
                                    value={this.state.polygon.value_4}
                                    onChange={this.handlePolygonValue_4}
                                  />
                                </Form.Row>
                              </Form.Group>

                              <Form.Group>
                                <Form.Row>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Título 5"
                                    value={this.state.polygon.option_5}
                                    onChange={this.handlePolygonOption_5}
                                  />
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Valor 5 (0.0 -> 1.0)"
                                    value={this.state.polygon.value_5}
                                    onChange={this.handlePolygonValue_5}
                                  />
                                </Form.Row>
                              </Form.Group>
                            </Form>
                          </div>
                          <Modal.Footer>
                            <Button
                              variant="primary"
                              onClick={() => this.setModalShowPolygon(false)}
                            >
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </>
                      <Button variant="success" onClick={this.uploadImage}>
                        Upload Imagem
                      </Button>
                    </Form.Group>
                    {this.state.edit ? (
                      <Button variant="success" onClick={this.handleUpdate}>
                        Atualizar Petiano
                      </Button>
                    ) : (
                      <Button variant="success" onClick={this.handleInsert}>
                        Cadastrar Petiano
                      </Button>
                    )}
                  </Form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => this.setModalShowMember(false)}>
                  Close
                </Button>
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
                    <Form.Group controlId="formURLRefProjeto">
                      <Form.Control
                        required
                        type="text"
                        value={this.state.urlP}
                        placeholder="URL de referência da imagem (caso não tenha deixar nulo)"
                        onChange={this.handleUrlChangeProject}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        label="É projeto antigo?"
                        required
                        checked={this.state.oldP}
                        onChange={this.handleOldPChange}
                      />
                    </Form.Group>
                    <Button variant="success" onClick={this.uploadImageP}>
                      Upload Imagem
                    </Button>
                    {this.state.editP ? (
                      <Button
                        variant="success"
                        onClick={this.handleUpdateProject}
                      >
                        Atualizar Projeto
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        onClick={this.handleInsertProject}
                      >
                        Cadastrar Projeto
                      </Button>
                    )}
                  </Form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => this.setModalShowProject(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col></Col>
        </Row>
      </>
    );
  }
}

export default Forms;
