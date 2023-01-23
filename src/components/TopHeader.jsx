import dropd_logo from '../dropd_logo.png';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, InputGroup } from "solid-bootstrap";




function TopHeader(){
	return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
	<Container fluid>
	<Navbar.Brand href="/">
		<img alt="DROPD" src={dropd_logo} width="95" height="25"/>
	</Navbar.Brand>
	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	<Navbar.Collapse id="responsive-navbar-nav">

	  <Nav class="mx-auto" style={{width:"70%"}}>
	  	
		<Form class="container-fluid justify-content-start">
			<InputGroup>
			
			<FormControl
			type="search"
			placeholder="Search"
			class="me-2 input-group"
			aria-label="Search"
			/>
			<InputGroup.Text id="basic-addon1"><i class="bi bi-search"></i></InputGroup.Text>
			
			</InputGroup>
		</Form>	
		
	  </Nav>

	  <br />
	  <Nav class='me-3'>
	    <Nav.Link href="#deets" class='btn  btn-sm btn-danger'>Go Live</Nav.Link>
	  </Nav>
          
	  <br />
	  <Nav>
	    <Nav.Link href="#signIn" class='btn btn-sm btn-outline-primary'>Sign In</Nav.Link>
	  </Nav>
	  
	  
	  <Nav>
	  	<Nav.Link><i class="bi bi-list" style={{'font-size': '1.5rem', color: 'cornflowerblue'}} ></i></Nav.Link>
	  </Nav>

	  <Nav>
	    	<Nav.Link><i class="bi bi-cart" style={{'font-size': '1.5rem', color: 'cornflowerblue'}}></i></Nav.Link> 
	  </Nav>
	  
	</Navbar.Collapse>
	</Container>
      </Navbar>;
}

export default TopHeader;