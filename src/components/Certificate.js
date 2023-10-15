import {Container,Row,Col,Card,Button} from "react-bootstrap"
import Sertif1 from "../assets/sertif/s1.png"
import Sertif2 from "../assets/sertif/s2.png"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Certificate = () =>{
    useEffect(()=>{
        Aos.init();
    }, [])

    return(
    <div className="sertifPage">
        <br/>
        <h1 className="text-white ms-3 " id="sertif">MY CERTIFICATES</h1>
        <br/>
        <Container
            data-aos="zoom-in">
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={5} className="movieWrapper">
                    <Card className="projectImage bg-dark text-white">
                    <Card.Img src={Sertif1} alt="Card image"  className="sertif"/>
                    </Card>
                </Col>
                <Col md={5} className="movieWrapper">
                    <Card className="projectImage bg-dark text-white">
                    <Card.Img src={Sertif2} alt="Card image"  className="sertif"/>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Certificate