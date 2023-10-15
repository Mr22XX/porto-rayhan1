import {Container, Row, Col} from "react-bootstrap"
import TypeIt from "typeit-react";
const Intro = () =>{
    return(
        <div className="Intro">
        <Container className="text-white d-flex justify-content-center align-items-center text-center flex-column">
            <Row>
                <Col>
                <div className="title">Hi I'm Rayhan Muhammad Adha</div>
                <img className="saya" src={require('../assets/logo/saya.jpeg')}/>
                <div className="title1">
                <TypeIt>" I'm a student Information of Technology at Univerity of Bengkulu "
                <br/> I'm currently learning React,Laravel and etc. <br/>
                </TypeIt>
                     </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Intro
