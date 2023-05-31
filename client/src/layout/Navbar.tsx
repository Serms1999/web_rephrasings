import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faList, faListCheck } from "@fortawesome/free-solid-svg-icons";

function CustomNavbar() {
    return (
        <>
            <Navbar className="navBg fixed-top" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" >Rephrasing</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" ><FontAwesomeIcon icon={faHouse}/> Home</Nav.Link>
                            <Nav.Link as={Link} to="/sentences"><FontAwesomeIcon icon={faList}/> Sentences</Nav.Link>
                            <Nav.Link as={Link} to="/exam"><FontAwesomeIcon icon={faListCheck}/> Exam</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default CustomNavbar;