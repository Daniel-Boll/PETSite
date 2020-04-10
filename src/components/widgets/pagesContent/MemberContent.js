import React, {Component} from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
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
        };
    }

    async componentDidMount() {
        let members = await DataHandler.getAllMembers();
        this.setState({
            loading: false,
            checked: true,
            members
        });
    }

    handleLoad = () => {
        this.setState({
            checked: true
        })
    }

    render() {
        const {members, checked} = this.state
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
                        <h1 align="center" style={{color: "white", fontSize: "65px"}}>PETIANOS</h1>
                        <br></br><br></br><br></br>
                    </Col>
                </Row>
                {members
                    .map((member, index) => (
                        <>
                        <Zoom in={checked} style={{transitionDelay: checked ? index*"250"+"ms" : '0ms'}}>
                            <Container>
                                <Row onLoad={this.handleLoad} xs={1} md={2}>
                                    <Col>
                                        {console.log(index)}
                                        {index % 2 === 0
                                            ?   // If true
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
                                                    </div>
                                                </div>

                                            :   // If false
                                                <div align="center">   
                                                    <Image width="180px" height="180px" src={member.foto} roundedCircle />
                                                </div>
                                        }
                                    </Col>
                                    <Col>
                                        {index % 2 === 0
                                            ?   // If true
                                                <div align="center">   
                                                    <Image width="171px" height="180px" src={member.foto} roundedCircle />
                                                </div>
                                            :   // If false
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
                                                    </div>
                                                </div>
                                        }
                                    </Col>
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