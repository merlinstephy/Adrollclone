import React from 'react';
import { Navbar,  Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';


const NavComponent = () => {
    return (
      
    <div className=' col-sm fixed-top'>
        <Navbar collapseOnSelect expand="sm" className='sticky-top  bg-white' style={{height : '90px'}}>

       
        <Navbar.Brand href="">
        <img src="./ad.png" alt="" width="30" height="30"/>
<span><b>AdRoll</b></span>
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto " >
          <NavDropdown title="Why Adroll?"  >
          <i class="fi fi-rr-angle-small-down"></i>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Marketing Platform" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>


            
           
            <NavDropdown title="For Ecommerce" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Resources" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>


          </Nav>
          <Nav>
            <Nav.Link href="#deets"><u>Log in</u></Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
        <button type="button" className="but">GET STARTED</button>

    </Navbar>
    <img src ="adroll1.jpg" alt="" width="60" height="60" className='fixed-bottom' style ={{marginLeft : '1280px'}}/>
    </div>
           
    )
    
}

export default NavComponent;