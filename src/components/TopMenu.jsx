import { Navbar, Container, Nav } from "solid-bootstrap";

function TopMenu(){
	return <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
	<Container fluid>

	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	<Navbar.Collapse id="responsive-navbar-nav">
	<Nav>
	  <Nav.Link href="#home">Shop Now</Nav.Link>
	  <Nav.Link href="#features">Home</Nav.Link>
	  <Nav.Link href="#pricing">Gift Guides</Nav.Link>
	  <Nav.Link href="#pricing">Fitness</Nav.Link>
	  <Nav.Link href="#pricing">Fashion</Nav.Link>
	  <Nav.Link href="#pricing">Gadgets</Nav.Link>
	  <Nav.Link href="#pricing">Costmetics</Nav.Link>
	  <Nav.Link href="#pricing">Food</Nav.Link>
	</Nav>
	</Navbar.Collapse>
	
	</Container>
      </Navbar>;
}

export default TopMenu;