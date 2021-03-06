import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Zoom } from "@material-ui/core";
import Logo from "../subContent/Logo";
import PETD from "../subContent/PETD";
import PETIcons from "../subContent/PETIcons";
import "../../../css/App.css";

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "",
      align: "",
      displayIcons: "",
      marginResize: "",
    };
  }

  async componentDidMount() {
    this.setState({
      checked: false,
      align: "left",
      display: 100,
    });
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    if (window.innerWidth < 550) {
      this.setState({
        align: "center",
        displayIcons: "none",
        marginResize: "50px",
      });
    } else {
      this.setState({
        align: "left",
        displayIcons: "",
        marginResize: "",
      });
    }
  };

  handleLoad = () => {
    this.setState({
      checked: true,
    });
    this.updateDimensions();
  };

  render() {
    const { checked, align, displayIcons, marginResize } = this.state;
    return (
      <>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          onLoad={this.handleLoad}
          xs={1}
          md={2}
        >
          <Col>
            <div>
              <Zoom
                in={checked}
                style={{ transitionDelay: checked ? "500ms" : "0ms" }}
              >
                <Container>
                  <Row>
                    <Col fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <Logo />
                    </Col>
                  </Row>
                </Container>
              </Zoom>
              <br></br>

              <Zoom
                in={checked}
                style={{ transitionDelay: checked ? "750ms" : "0ms" }}
              >
                <Container>
                  <Row>
                    <Col
                      fluid
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                      }}
                    >
                      {/* PET description */}
                      <PETD />
                    </Col>
                  </Row>
                </Container>
              </Zoom>
            </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row xs={1} md={2}>
            <Col>
              {/* O alinhamento da div ?? alterado quando passa de determinado tamanho */}
              <div
                align={align}
                style={{ minWidth: "330px", maxHeight: "450px" }}
              >
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "1000ms" : "0ms" }}
                >
                  <Container>
                    {/* What is PET */}
                    <div style={{ maxWidth: "300px" }} align="left">
                      <h1 align={align} style={{ color: "white" }}>
                        O que ???
                      </h1>
                      <p style={{ color: "white" }}>
                        O PET Ci??ncia da Computa????o (PETComp) foi criado em
                        dezembro de 2010 e ?? o 5?? Grupo PET da UNIOESTE (1?? do
                        campus de Cascavel), destinado exclusivamente aos alunos
                        regularmente matriculados no Curso. Sua aprova????o junto
                        ao MEC foi uma conquista do Prof. Dr. Clodis Boscarioli,
                        muito bem recebida, ap??s 5 tentativas de submiss??o de
                        projeto por parte de v??rios professores.
                      </p>
                    </div>
                  </Container>
                </Zoom>
              </div>
            </Col>
            <Col>
              {/* ??cones */}
              <br></br>
              {/* Opacity ?? alterada pra 0 quando passa de uma determinado tamanho, ent??o deixam de ser mostrados */}

              <div style={{ display: displayIcons }}>
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "1250ms" : "0ms" }}
                >
                  <Container
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center  ",
                    }}
                  >
                    <PETIcons />
                    <div align="center">
                      <a
                        style={{
                          display: "flex",
                          fontSize: "10px",
                          color: "#A9A9A9",
                          writingMode: "vertical-rl",
                        }}
                        href="https://pngtree.com/so/p??gina-de-reuni??o"
                      >
                        p??gina-de-reuni??o png from pngtree.com
                      </a>
                    </div>
                  </Container>
                </Zoom>
              </div>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Row xs={1} md={3}>
            <Col>
              {/* Projeto, pesquisa e exten????o */}
              <div>
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "1000ms" : "0ms" }}
                >
                  <Container>
                    <div align="center">
                      <div style={{ maxWidth: "300px" }} align="left">
                        <h1 align={align} style={{ color: "white" }}>
                          Pesquisa
                        </h1>
                        <p style={{ color: "white" }}>
                          Para incentivar a pesquisa, no PET, todos os membros
                          devem ter um projeto de inicia????o cientifica.
                        </p>
                      </div>
                    </div>
                  </Container>
                </Zoom>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: marginResize }}>
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "1000ms" : "0ms" }}
                >
                  <Container>
                    <div style={{ maxWidth: "300px" }} align="left">
                      <h1 align={align} style={{ color: "white" }}>
                        Ensino
                      </h1>
                      <p style={{ color: "white" }}>
                        O PET organiza eventos para compartilhar e adquirir
                        conhecimento, como minicursos e palestras, que s??o
                        abertos para os membros do PET e para os acad??micos do
                        curso de ci??ncia da computa????o.
                      </p>
                    </div>
                  </Container>
                </Zoom>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: marginResize }}>
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "1000ms" : "0ms" }}
                >
                  <Container>
                    <div style={{ maxWidth: "300px" }} align="left">
                      <h1 align={align} style={{ color: "white" }}>
                        Extens??o
                      </h1>
                      <p style={{ color: "white" }}>
                        Entre os projetos que o PET realiza, existem os projetos
                        de extens??o, que estabelecem uma conex??o com a
                        comunidade.
                      </p>
                    </div>
                  </Container>
                </Zoom>
              </div>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}

export default HomeContent;
