import React, {Component, useState} from 'react'
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import {Zoom} from '@material-ui/core'
import DataHandler from '../../../data/MemberDataHandler';
import Loading from '../Loading';
import Radar from '../Radar';

class OldMemberContent extends Component {

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
            foto: '',
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

    myRenderPoint (point) {
        return (
          <circle cx={point[0]} cy={point[1]} r={5} />
        )
    }

    sortOn (arr, prop) {
        arr.sort (
            function (a, b) {
                if (a[prop].toUpperCase() < b[prop].toUpperCase()){
                    return -1;
                } else if (a[prop].toUpperCase() > b[prop].toUpperCase()){
                    return 1;
                } else {
                    return 0;   
                }
            }
        );
    }

    render() {
        const { members, checked, modalShowICV, fontSizeTitle, onSmartView } = this.state;
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
                        <h1 align="center" style={{color: "white", fontSize: fontSizeTitle, marginBottom: '50px'}}>PETIANOS EGRESSOS</h1>
                    </Col>
                </Row>
                {this.sortOn(members, "nome")}
                {members
                    .filter(member => member.old == 'Sim')
                    .map((member, index) => (
                        <>
                        <Zoom in={checked} style={{transitionDelay: checked ? index*"250"+"ms" : '0ms'}}>
                            <Container>
                                <Row onLoad={this.handleLoad} xs={1} md={2}>
                                {(index % 2 === 0 || onSmartView) ?
                                    <>
                                        <Col>
                                            <div align="center">   
                                                <Image width="180px" height="180px" src={member.foto} roundedCircle />
                                            </div>
                                        </Col>
                                    </>
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
                                                </a>
                                                <ModalProjeto 
                                                    title={member.icv.title}
                                                    description={member.icv.description} 
                                                    advisor={member.icv.advisor} 
                                                    year={member.icv.year}
                                                />
                                                <ModalFAQ/>
                                                
                                            </div>
                                        </div>
                                    </Col>
                                    {(index % 2 !== 0 && (!onSmartView)) ?
                                    <>
                                        <Col>
                                            <div align="center"> 
                                                <Image width="180px" height="180px" src={member.foto} roundedCircle />
                                            </div>
                                        </Col>
                                    </>
                                        :
                                        <></>
                                    }
                                </Row><br></br><br></br><br></br><br></br>
                            </Container>
                        </Zoom>
                        </>
                ))}
            </>
        )
    }
}

const ModalProjeto = (props) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {title, description, advisor, year} = props;

    return(<>

        {/* Modal Projeto*/}
        <p style={{color: "yellow", cursor: "pointer", marginBottom: 0}} onClick={handleShow}>
            ICV
        </p>
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>ICV DO PETIANO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div align="center">
                    <h1>{title}</h1>
                    <Row>
                        <Col>
                            <p>{description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><b>{advisor}</b></p>
                            <p><b>{year}</b></p>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>    
    </>);
}

const ModalFAQ = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        {/* Modal Q&A */}
        <p style={{color: "yellow", cursor: "pointer"}} onClick={handleShow}>
            Saiba mais...
        </p>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default OldMemberContent;