import {Card, Container,Row,Col,Button} from "react-bootstrap"
import satu from "../assets/project/1.jpg"
import quran from "../assets/project/quran.jpg"
import tic from "../assets/project/tic.png"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";

const Projects = () =>{
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    return(
        <div className="Projects">
            <br/>
            <h1 className="text-white ms-3 " id="project">MY PROJECTS</h1>
            <br/>
            <Container data-aos="fade-up">
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="projectImage bg-dark text-white">
                        <Card.Img src={satu} alt="Card image"  className="images"/>
                            <Card.Title className="text-center">Film Directory</Card.Title>
                            <Card.Text className="text-left">
                            This is Film Directory Site Created with ReactJS.
                            </Card.Text>
                            <Button variant="light" href="https://mr22xx.github.io/RayhanFilms/" target="blank">Visit the Site</Button>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="projectImage bg-dark text-white">
                        <Card.Img src={quran} alt="Card image"  className="images"/>
                            <Card.Title className="text-center">My Quran</Card.Title>
                            <Card.Text className="text-left">
                            This is Web still on progress.
                            </Card.Text>
                            <Button variant="light" href="https://myquran.mr22xx.repl.co/" target="blank">Visit the Site</Button>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="projectImage bg-dark text-white">
                        <Card.Img src={tic} alt="Card image"  className="images"/>
                            <Card.Title className="text-center">Tictactoe Game</Card.Title>
                            <Card.Text className="text-left">
                            This is my first Java Project with my friend.
                            </Card.Text>
                            <Button variant="light" href="https://github.com/Mr22XX/TicTactoe" target="blank">Visit the Site</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects