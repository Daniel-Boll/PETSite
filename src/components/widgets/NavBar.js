import React, {Component} from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../../assets/logoC.png'
import '../../css/App.css';

class NavBar extends Component {
    
    render() {
        return (
            <>
                <Navbar variant="dark" className="NavBar" fluid style={{ paddingLeft: 0, paddingRight: 0 }} collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">
                    <img
                        style={{paddingLeft: "40"}}
                        width={"42px"}
                        src={logo}
                        alt="PETLogo"
                    />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="/"          style={{color: "white"}}><b>INÍCIO</b></Nav.Link>
                            <Nav.Link href="/Project"   style={{color: "white"}}><b>PROJETOS</b></Nav.Link>
                            <Nav.Link href="/Member"    style={{color: "white"}}><b>MEMBROS</b></Nav.Link>
                            <NavDropdown title={<spam style={{color: "white"}}><b>ACERVO</b></spam>}>
                                <NavDropdown.Item href="/OldMember">Membros egressos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/OldProject">Projetos Antigos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar><br/><br/><br/><br/>
            </>
        )
    }
}

export default NavBar;