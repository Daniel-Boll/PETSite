import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/logoC.png'

class NavBar extends Component {
   

    render() {
        return (
            <>
                <Navbar className="NavBar" fluid style={{ paddingLeft: 0, paddingRight: 0 }} collapseOnSelect expand="lg">
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
                            <Nav.Link href="/PETSite/" style={{color: "white"}}><b>INÍCIO</b></Nav.Link>
                            <Nav.Link href="/PETSite/Project" style={{color: "white"}}><b>PROJETOS</b></Nav.Link>
                            <Nav.Link href="/PETSite/Member" style={{color: "white"}}><b>MEMBROS</b></Nav.Link>
                            <Nav.Link href="/PETSite/Contact" style={{color: "white"}}><b>CONTATOS</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar><br/><br/><br/><br/>
            </>
        )
    }
}

export default NavBar;