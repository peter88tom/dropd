import { Navbar, Container, Nav } from "solid-bootstrap";

function TopMenu(){
	return <Navbar bg="light" variant="light">
	<Container>
	<Nav class="me-auto">
	  <Nav.Link href="#home">Features</Nav.Link>
	  <Nav.Link href="#features">Beauty</Nav.Link>
	  <Nav.Link href="#pricing">Music</Nav.Link>
	</Nav>
	</Container>
      </Navbar>;
}

export default TopMenu;