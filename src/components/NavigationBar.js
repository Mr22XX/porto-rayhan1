import {Container, Nav,Navbar} from "react-bootstrap"
const NavigationBar = () =>{
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                    <img className="logo" src={require('../assets/logo/logo.png')}/>
                    <Nav>
                    <Nav.Link href="#project">Projects</Nav.Link>
                    <Nav.Link href="#sertif">Certificate</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar