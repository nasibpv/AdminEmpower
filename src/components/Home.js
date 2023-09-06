import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../style/Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navbar className='nav ps-2 pe-3'>
      {/* <Container className='w-100'> */}
        <Navbar.Brand href="#home" className='ms-2 p-2'> Luminar TechnoLab</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to={'/login'}><Button variant="success" > Login </Button></Link>
          </Navbar.Text>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
    <div>
    <Carousel variant="dark" className='dark'>
      <Carousel.Item>
        <img
          className="img d-block w-10" 
          src="https://i.postimg.cc/mgDMmjZ9/357957c41b7e17be0d9f1de15403ae2a-png-wh860.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img d-block w-100"
          src="https://i.postimg.cc/mgDMmjZ9/357957c41b7e17be0d9f1de15403ae2a-png-wh860.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" img d-block w-100"
          src="https://i.postimg.cc/mgDMmjZ9/357957c41b7e17be0d9f1de15403ae2a-png-wh860.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Home