import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from '@material-ui/core/Avatar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Home.css';

const Home = () => {

    return(
        <Container fluid>
            <Container className='mt-3 px-md-5' fluid>
                <Navbar expand='md' >
                    <Navbar.Brand>
                        <h2>
                            MUBBASHIR ALI
                        </h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav className='ml-auto d-flex align-items-center justify-content-center'>
                            <Nav.Link href='#contact' style={{ color: '#4623a6' }}>
                                <Button 
                                    style={{ borderRadius: '20px' }} >
                                    Contact
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

            <Row className='mt-5'>
                <Col className='tagline mt-5'>
                    <h1 style={{ fontSize: '2.8rem', color: '#0e154a' }}>
                        Full Stack Web Applications Developer
                    </h1>
                </Col>
            </Row>
            <Row className='mt-3' >
                <Col className='tagline'>
                    <p style={{ fontSize: '1.3rem' }}>
                        I develop end-to-end Websites and Cross Platform Mobile Applications
                    </p>
                </Col>
            </Row>
            
            <Row className='mt-5'>
                <Col className='mt-3' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar style={{ width: '15rem', height: '15rem' }} src={require('../../Images/avatar_image.jpg')} />
                </Col>
            </Row>

            
            <Container className='briefIntro mt-5' fluid>
                <Row>
                    <Col>
                        <h3 style={{ color: '#ffffff' }}>Hey! It's Mubbashir here...</h3>
                    </Col>
                </Row>
                
                <Container className='briefIntroTextContainer'>
                    <Row>
                        <Col>
                            <p style={{ color: '#ffffff' }} >Started my Computer Sciences journey way back in 2018. My expertise include building
                                end to end Websites and Mobile Applications. If you wanna get built a Website or Mobile
                                Application, you are at the right place! <br /> Apart from that? Ahhh.. 
                                I love playing Chess and Music. <br /> Currently a Computer Sciences Undergraduate in National University 
                                of Computer and Emerging Sciences, Karachi.
                            </p>
                        </Col>
                    </Row>
                </Container>

            </Container>

            <Container className='skillsTableContainer mb-5' style={{ borderRadius: '20px', border: '1px solid #bababa' }}>
                <Row style={{ borderRadius: '5px' }} className='pt-5'>
                    <Col className='skillsTableColumn py-5' style={{ borderRight: '1px solid #bababa' }} md={4}>
                        <FontAwesomeIcon className='mb-5' style={{ fontSize: '3rem', color: '#4623a6' }} icon={faCode} />
                        
                        <h3>Front-end Developer</h3>

                        <p className='mt-3'>
                            I love to develop front-end designs, keeping them responsive to different viewports
                        </p>

                        <p className='mt-5' style={{ color: '#4623a6' }}>
                            Languages I use:
                        </p>

                        <p>
                            HTML5, CSS3, JS, JSX, ES6
                        </p>

                        <p className='mt-5' style={{ color: '#4623a6' }}>
                            Dev Tools and Frameworks:
                        </p>

                        <p>
                            React <br />
                            Bootstrap <br />
                            VS Code <br />
                            Github <br />
                            Yarn Package Manager <br />
                            Node Package Manager <br />
                        </p>
                    </Col>
                    <Col className='skillsTableColumn py-5' style={{ borderRight: '1px solid #bababa' }} md={4}>
                        <FontAwesomeIcon className='mb-5' style={{ fontSize: '3rem', color: '#4623a6' }} icon={faLaptopCode} />
                        
                        <h3>Back-end Developer</h3>

                        <p className='mt-3'>
                            I can bring logic and life to your applications by writing their Business, core
                            logic layer and then connecting it to database making your applications informative
                        </p>

                        <p className='mt-5' style={{ color: '#4623a6' }}>
                            Languages I use:
                        </p>

                        <p>
                            JS, ES6, C++, Java, C#
                        </p>

                        <p className='mt-5' style={{ color: '#4623a6' }}>
                            Dev Tools and Frameworks:
                        </p>

                        <p>
                            NodeJS <br />
                            ExpressJS <br />
                            MongoDB <br />
                            Github <br />
                            Yarn Package Manager <br />
                            Node Package Manager <br />
                        </p>
                    </Col>
                    <Col className='skillsTableColumn py-5' md={4}>
                        <FontAwesomeIcon className='mb-5' style={{ fontSize: '3rem', color: '#4623a6' }} icon={faMobileAlt} />

                        <h3>Mobile App Developer</h3>

                        <p className='mt-3'>
                            Building Mobile Applications is something that I really enjoy. 
                            I love to develop their front-end, backend, database and Boom! I integrate them all
                            too. And yeah, these mobile apps are cross platform! 
                        </p>

                        <p className='mt-5' style={{ color: '#4623a6' }}>
                            Languages I use:
                        </p>

                        <p>
                            JS, ES6, JSX, Dart, C#, Java
                        </p>

                        <p className='mt-5' style={{ color: '#4623a6' }}>
                            Dev Tools and Frameworks:
                        </p>

                        <p>
                            React Native <br />
                            Flutter <br />
                            Github <br />
                            Yarn Package Manager <br />
                            Node Package Manager <br />
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container id='contact' className='footer' fluid>
                <Row className='mb-5 footerContent'>
                    <h2 style={{ color: '#ffffff' }}>
                        Mubbashir Ali
                    </h2>
                </Row>

                <Row className='mb-5 footerContent'>
                    <h4 style={{ color: '#b5a2e0' }}>
                        Providing you solutions through web based applications
                    </h4>
                </Row>

                <Row className='footerContent mb-5'>
                    <Col className='iconsContainer'>
                        <a href='https://facebook.com/mubbashir.ali.9/'>
                            <FontAwesomeIcon icon={faFacebook} style={{ color: '#ffffff', fontSize: '3rem' }} />
                        </a>
                        <a href='https://linkedin.com/in/mubbashir-ali-8604aa191/'>
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#ffffff', fontSize: '3rem' }} />
                        </a>
                        <a href='https://github.com/MubbashirAli35'>
                            <FontAwesomeIcon icon={faGithub} style={{ color: '#ffffff', fontSize: '3rem' }} />
                        </a>
                        <a href='https://instagram.com/mubbashirali.8/'>
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#ffffff', fontSize: '3rem' }} />
                        </a>
                        <a href='mailto:mubbashirali35@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ffffff', fontSize: '3rem' }} />
                        </a>
                    </Col>
                </Row>

                <Row className='footerContent'>
                    <h6 style={{ color: '#b5a2e0' }}>
                        Handcrafted by me
                    </h6>
                </Row>
            </Container>
        </Container>
    );
}

export default Home;