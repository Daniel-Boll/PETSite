import React, {Component} from 'react'
import { Container, Row, Col, Image} from "react-bootstrap";
import {Zoom} from '@material-ui/core'
import DataHandler from '../../../data/ProjectDataHandler';
import Loading from '../Loading';
import Project from '../subContent/Project'

class ProjectContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            checked: false,
            projects: [],
            fontSizeTitle: '65px',
            onSmartView: false
        };
    }

    componentWillMount(){
        this.updateDimensions();
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

    async componentDidMount() {
        let projects  = await DataHandler.getAllProjects();
        this.setState({
            loading: false,
            checked: true,
            projects
        });
        window.addEventListener('resize', this.updateDimensions);
    }

    handleLoad = () => {
        this.setState({
            checked: true
        })
    }
    
    render() {
        const {projects, checked, fontSizeTitle, onSmartView} = this.state
        if (this.state.loading) {
            return (
                <Container style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Loading/>
                </Container>
            );
        }
        return (
            <>
                <Row onLoad={this.handleLoad} xs={1} md={2}>
                    <Col>
                        <h1 align="center" style={{color: "white", fontSize: fontSizeTitle}}>PROJETOS</h1>
                    </Col>
                </Row>
                <br></br><br></br>
                <Row>
                {projects.map((project, index) => (
                    <>
                        {(project.old !== 'Sim')?
                        <Zoom in={checked} style={{transitionDelay: checked ? index*"250"+"ms" : '0ms'}}>
                            <Container>
                                <div align="center">
                                    { onSmartView ? 
                                        <Row onLoad={this.handleLoad} xs={1} md={2}>
                                            <Col>
                                                <Project title = {project.nome} description = {project.descricao} onSmartView = {onSmartView} index = {index} /> 
                                            </Col>
                                        </Row>
                                        :
                                        <Row onLoad={this.handleLoad} xs={1} md={2}>
                                            {index % 2 !== 0 ?
                                            <Col>
                                                <div style={{display:"flex", alignItems:"center", justifyContent:"flex-start"}}> 
                                                    <div style={{display:"flex", alignItems:"center"}}><a style={{fontSize:"10px", color:"#A9A9A9", writingMode:"vertical-lr", transform:"rotate(-180deg)"}} url= {project.url}>{project.url}</a></div>
                                                    <div style={{display:"flex", alignItems:"center"}}><Image width="400px" height="320px" src={project.foto}/></div>
                                                </div>
                                            </Col> : <></> }
                                            <Col>
                                                <Project title = {project.nome} description = {project.descricao} onSmartView = {onSmartView} index = {index} /> 
                                            </Col>
                                            { index % 2 === 0 ? <Col>
                                                <div style={{display:"flex", alignItems:"center", justifyContent:"flex-end"}}>   
                                                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><Image width="400px" height="320px" src={project.foto}/></div>
                                                    <div style={{display:"flex", alignItems:"center"}}><a style={{fontSize:"10px", color:"#A9A9A9", writingMode:"vertical-lr"}} href = {project.url}>{project.url}</a></div>
                                                </div>
                                            </Col> : <></> }
                                        </Row>
                                    }
                                </div>
                                <br></br><br></br><br></br><br></br>
                            </Container>
                        </Zoom>
                        :<></>}
                    </>
                ))}
                </Row>
            </>
        )
    }
}

export default ProjectContent;