import React, {Component} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {Zoom} from '@material-ui/core'
import DataHandler from '../../../data/ProjectDataHandler';
import Loading from '../Loading';

class ProjectContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            checked: false,
            projects: [],
        };
    }

    async componentDidMount() {
        let projects  = await DataHandler.getAllProjects();
        this.setState({
            loading: false,
            checked: true,
            projects
        });
    }

    handleLoad = () => {
        this.setState({
            checked: true
        })
    }
    
    render() {
        const {projects, checked} = this.state
        if (this.state.loading) {
            return (
                <Container>
                    <Loading/>
                </Container>
            );
        }
        return (
            <>
                <Row onLoad={this.handleLoad} xs={1} md={2}>
                    <Col>
                        <h1 align="center" style={{color: "white", fontSize: "65px"}}>PROJETOS</h1>
                    </Col>
                </Row>
                <Row>
                {projects
                    .map((project, index) => (
                        <>
                        <Zoom in={checked} style={{transitionDelay: checked ? index*"250"+"ms" : '0ms'}}>
                            <Container>
                                <Row onLoad={this.handleLoad} xs={1} md={2}>
                                    <Col>
                                        {index % 2 === 0
                                            ?   // If true
                                                <><div align="left">   
                                                    <h1 align="left" style={{color: "white"}}>{project.nome}</h1>
                                                    <div align="left">
                                                        <p style={{color: "white"}}>
                                                            {project.descricao}
                                                        </p>
                                                    </div>
                                                </div>
                                                <br></br><br></br><br></br><br></br><br></br></>
                                            :   
                                                <>
                                                </>
                                        }
                                    </Col>
                                    <Col>
                                    
                                    </Col>
                                    <Col>
                                        {index % 2 !== 0
                                            ?   // If true
                                                <><div align="left">   
                                                    <h1 align="left" style={{color: "white"}}>{project.nome}</h1>
                                                    <div align="left">
                                                        <p style={{color: "white"}}>
                                                            {project.descricao}
                                                        </p>
                                                    </div>
                                                </div><br></br><br></br><br></br><br></br><br></br></>

                                            :   
                                                <>
                                                </>
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </Zoom>
                        </>
                ))}
                </Row>
            </>
        )
    }
}

export default ProjectContent;