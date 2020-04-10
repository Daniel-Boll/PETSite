import React, {Component} from 'react'
import {Row, Col, Container, Form, Button, Card} from 'react-bootstrap'
import * as firebase from "firebase/app";
import Authentication from '../routes/Authentication'
import Forms from '../routes/Forms'
import "firebase/auth";
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: '',
            authentication: {},
            isLoggedIn: false
        }
    }

    async componentDidMount() {
        // let authentication = await DataHandler.getAuthentication();
        this.setState({
            authentication: {
                user: 'admin',
                password: '123',
                isLoggedIn: false
            }
        });
    }

    handleUser = e => {
        this.setState({
            user: e.target.value
        })
    
    }
    handlePassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    handleAuthentication = () => {
        let email = this.state.user;
        let password = this.state.password
        console.log("function called");
        // To Sign Up

        // firebase.auth().createUserWithEmailAndPassword(email, password)
        // .catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     if (errorCode == 'auth/weak-password') {
        //         alert('The password is too weak.');
        //     } else {
        //         alert(errorMessage);
        //     }
        //     console.log(error);
        // });

        // To Sign In 
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {
            this.setState({
                isLoggedIn: true
            })
            this.forceUpdate();
        })
        .catch(error => {
            return <Authentication isLoggedIn={false}/>     

        });
          
    }

    render(){
        const {isLoggedIn} = this.state;
        if(isLoggedIn){
            return(
                <Forms/>
            )
        }else{
            return(
                <>
                <Container>
                    <Row>
                        <Col className="p-5 text-center">
                        <h1 style={{color: "white", fontSize: "60px"}}><b>Login</b></h1>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col></Col>

                        <Col xs="6">
                            <Card
                                style={{ overflowX: "auto" }}
                                body
                            >
                                <Form>
                                    <Form.Group controlId="formBasicUser">
                                        <Form.Label>Usuário</Form.Label>
                                        <Form.Control type="user" placeholder="Insira usuário" onChange={this.handleUser} required/>
                                        <Form.Text className="text-muted">
                                            Usuário informado pelo tutor.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control type="password" placeholder="Insira senha" onChange={this.handlePassword} required/>
                                        <Form.Text className="text-muted">
                                            Senha informada pelo tutor.
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" onClick={this.handleAuthentication}>
                                        Login
                                    </Button>
                                </Form>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                </>
            )
        }
    }
}

export default Login;
