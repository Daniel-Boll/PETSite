import React, {Component} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {Zoom} from '@material-ui/core'
import DataHandler from '../../data/DataHandler';
import Loading from '../widgets/Loading';

class MemberContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            members: []
        };
    }

    async componentDidMount() {
        let members = await DataHandler.getAllMembers();
        this.setState({
            loading: false,
            members
        });
    }

    handleLoad = () => {
        this.setState({
            checked: true
        })
    }

    render() {
        const {members} = this.state
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
                        <h1 align="center" style={{color: "white", fontSize: "65px"}}>PETIANOS</h1>
                    </Col>
                </Row>
                {members
                    .map((member, index) => (
                        <>
                            <Row onLoad={this.handleLoad} xs={1} md={2}>
                                <Col>
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
                                                    <a href={member.lattes} style={{color: "white"}}>
                                                        Currículo Lattes
                                                    </a>
                                                </div>
                                            </div>

                                        :   // If false
                                            <div align="center">   
                                                <h1 align="center" style={{color: "white"}}>Foto</h1>
                                            </div>
                                    }
                                </Col>
                                <Col>
                                    {index % 2 === 0
                                        ?   // If true
                                            <div align="left">   
                                                <h1 align="center" style={{color: "white"}}>Foto</h1>
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
                                                    <a href={member.lattes} style={{color: "white"}}>
                                                        Currículo Lattes
                                                    </a>
                                                </div>
                                            </div>
                                    }
                                </Col>
                            </Row><br></br><br></br><br></br><br></br>
                        </>
                ))}
            </>
        )
    }
}

export default MemberContent;