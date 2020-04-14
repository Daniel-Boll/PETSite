import React, {Component} from 'react'
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import {Zoom} from '@material-ui/core'
import DataHandler from '../../../data/MemberDataHandler';
import Loading from '../Loading';

class MemberContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            checked: false,
            members: [],
            modalShowICV: false,
            advisor: '',
            description: '',
            year: '',
            title: '',
            onSmartView: false
        };
    }

    componentWillMount(){
        this.updateDimensions();
    }

    async componentDidMount() {
        let members = await DataHandler.getAllMembers();
        this.setState({
            loading: false,
            checked: true,
            members,
            fontSizeTitle: '65px'
        });
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }

    handleLoad = () => {
        this.setState({
            checked: true
        })
    }

    setModalShowICV = state => {
        if(!state)
            this.cleanICVInfo();
        this.setState({
            modalShowICV: state
        })
    }

    getICVInfo = icv => {
        let {year, advisor, description, title} = icv;
        this.setState({
            advisor: advisor,
            year: year,
            description: description,
            title: title
        });
    }

    updateDimensions = () => {
        if(window.innerWidth < 515){
            this.setState({
                fontSizeTitle: '50px',
                onSmartView: true
            });
        }else{
            this.setState({
                fontSizeTitle: '65px',
                onSmartView: false
            });
        }
    }

    cleanICVInfo = () => {
        this.setState({
            advisor: '',
            description: '',
            year: '',
            title: ''
        })
    }

    render() {
        const { members, checked, modalShowICV, fontSizeTitle, onSmartView } = this.state
        if (this.state.loading) {
            return (
                <Container>
                    <Loading/>
                </Container>
            );
        }

        return (
            <>
                <Row onLoad={this.handleLoad} >
                    <Col>
                        <h1 align="center" style={{color: "white", fontSize: fontSizeTitle, marginBottom: '50px'}}>PETIANOS</h1>
                    </Col>
                </Row>
                {members
                    .map((member, index) => (
                        <>
                        <Zoom in={checked} style={{transitionDelay: checked ? index*"250"+"ms" : '0ms'}}>
                            <Container>
                                <Row onLoad={this.handleLoad} xs={1} md={2}>
                                {(index % 2 === 0 || onSmartView) ?
                                        <Col>
                                            <div align="center">   
                                                <Image width="180px" height="180px" src={member.foto} roundedCircle />
                                            </div>
                                        </Col>
                                        :
                                        <></>
                                    }
                                    <Col>
                                        <div align="left">   
                                            <h1 align="center" style={{color: "white"}}>{member.nome}</h1>
                                            <div align="center">
                                                <p style={{color: "white"}}>
                                                    {member.descricao}
                                                </p>
                                                <p style={{color: "white"}}>
                                                    <b>E-mail: </b>{member.email}
                                                </p>
                                                <a href={member.lattes} style={{color: "yellow"}}>
                                                    Currículo Lattes
                                                </a><br></br>
                                                <p style={{color: "yellow", cursor: "pointer"}} onClick={() => {
                                                        this.getICVInfo(member.icv);
                                                        this.setModalShowICV(true);
                                                    }}>
                                                    ICV
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    {(index % 2 !== 0 && (!onSmartView)) ?
                                        <Col>
                                            <div align="center">   
                                                <Image width="180px" height="180px" src={member.foto} roundedCircle />
                                            </div>
                                        </Col>
                                        :
                                        <></>
                                    }
                                    {/* Modal Projeto */}
                                    <Modal
                                        show={modalShowICV}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                ICV DO PETIANO
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div align="center">
                                                <h1>{this.state.title}</h1>
                                                <Row>
                                                    <Col>
                                                        <p>{this.state.description}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <p><b>{this.state.advisor}</b></p>
                                                        <p><b>{this.state.year}</b></p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={() => this.setModalShowICV(false)}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Row><br></br><br></br><br></br><br></br>
                            </Container>
                        </Zoom>
                        </>
                ))}
            </>
        )
    }
}

export default MemberContent;