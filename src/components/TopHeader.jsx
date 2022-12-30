import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "solid-bootstrap";




function TopHeader(){
	return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
	<Container>
	<Navbar.Brand href="#home">
		<img alt="" src={"src/assets/dropd_logo.png"} width="95" height="25" />
	</Navbar.Brand>
	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	<Navbar.Collapse id="responsive-navbar-nav">
	  {/* <Nav class="me-auto">
	    <Nav.Link href="#features">Features</Nav.Link>
	    <Nav.Link href="#pricing">Pricing</Nav.Link>
	    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
	      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
	      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
	      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
	      <NavDropdown.Divider />
	      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
	    </NavDropdown>
	  </Nav> */}
	  <Nav class="me-auto">
		<Form class="d-flex">
			<FormControl
			type="search"
			placeholder="Search"
			class="me-2"
			aria-label="Search"
			/>
			<Button variant="outline-success">Search</Button>
		</Form>
	  </Nav>
	  <Nav>
	    <Nav.Link href="#deets">Log Live</Nav.Link>
	    <Nav.Link href="#signIn">Sign In</Nav.Link>
	    <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
	  </Nav>
	</Navbar.Collapse>
	</Container>
      </Navbar>;
}

export default TopHeader;