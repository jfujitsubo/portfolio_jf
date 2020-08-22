import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, Form, FormControl, Button, ButtonGroup, Dropdown, DropdownButton, Jumbotron, Container, Figure, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">    
  
  <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&family=Rubik&display=swap" rel="stylesheet"></link>
  <Navbar bg="dark" variant="dark" fixed ="top">
  <img src="./water-icon-58.png" class = "img-responsive" ></img>
  
    <Navbar.Brand href="#home" className = "text-rubik">Full Stack Dev <small class = "text-rubik text-danger">MERN</small> </Navbar.Brand>
    <Nav className="mr-auto text-rubik">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      {/*<Nav.Link href="#socials">Socials</Nav.Link>*/}

    
    </Nav>

    <ButtonGroup>

    
    <div className="mb-2" >
    {['left'].map((direction) => (
      
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction} `}
        drop={direction}
        variant="dark text-light text-rubik"
        title={` Socials `}
        
      >
      {/*figure out how to CLEAN*/}  
        
        <Dropdown.Item  eventKey="1" className = "text-rubik font-weight-bold text-dark">
        <img src="./linkedin.png" alt="LinkedIn" class="thumbnailSize"></img>LinkedIn</Dropdown.Item>
        <Dropdown.Item  eventKey="2" className = "text-rubik font-weight-bold text-dark">
        <img src="./github.png" alt="GitHub" class="thumbnailSize"></img> GitHub</Dropdown.Item>
        <Dropdown.Item  eventKey="3" className = "text-rubik font-weight-bold text-dark">
        <img src="./stackoverflow.png" alt="..." class="thumbnailSize"></img>StackOverflow</Dropdown.Item>
        <Dropdown.Item  eventKey="4" className = "text-rubik font-weight-bold text-dark">
        <img src="./ig.png" alt="..." class="thumbnailSize"></img>Instagram</Dropdown.Item>
      
      </DropdownButton>
      
    ))}
  </div>

</ButtonGroup>
    
  
  </Navbar>
<br></br>

{/* JUMBOTRON ATTEMPT AT BIO */}
  
  <div class="jumbotron jumbotron-billboard">
  <div>
  <div class="img" ><img src="./ghibli2.png" width = "100%"></img></div>
  </div>
    <Container>
        <Row>
            <Col>
              <h1 className = "display-2 text-light">hi im jonathan</h1>
                <Figure>
                
                  {/*<Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="./goku2.png"
                    className="rounded-circle "
                  />*/}
                      <Card>
                        <Card.Body>
                      <Figure.Caption className = "text-dark text-rubik font-weight-bold">
                      <h5 className = "text-danger">About Me</h5>
                      <p>Hello! My name is Jonathan Fujitsubo. 
                        My focus is full-stack web application and software development with an emphasis on design and UI/UX.
                        <br></br>
                        I am a UCLA Full-Stack Web Development alum, currently residing in Los Angeles, California. 
                        Since my inception, I have taken to many creative disciplines--those that include the martial arts, basketball, and music.
                        Because of this, my latest venture has been none other than writing code. Code has become a passion of mine
                        largely because of the fact that two developers may be tasked with a similar project--yet, both developers
                        will likely come to entirely different solutions. This in itself sparks my creative flame and desire to
                        further improve my skills.

                      </p>
                      <h5 className = "text-danger">Skills</h5>
                      <p>
                        I have been studying web development as a hobby since 2012, and started taking this skill more seriously in 2018 where
                        I received my <strong>Full Stack Development Certificate at UCLA.</strong>
                        The technologies I currently excel at are the <strong>MERN</strong> stack.
                        Many of the projects and applications I have written code for were 
                        made in <strong>React Native</strong>--just as this
                        webpage is.
                      </p>
                      <h5 className = "text-danger">Experience</h5>
                      <p>
                        Feel free to peruse the many projects I've written for in the "Projects" tab above
                        <br></br>
                        <br></br>
                        <p class = "text-primary">Thanks for stopping by!</p>
                      </p>
                      
                      </Figure.Caption>
                       </Card.Body>
                      </Card>
                </Figure>
            </Col>
            
        </Row>
    </Container>
</div>

{/* 
<div>
<Container fluid>
<Card className="bg-dark text-white cardCSS overflow-auto">
  <Card.Img src="./ghibli2.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
</Container>
</div>
*/}

    </div>
  );
}

export default App;
