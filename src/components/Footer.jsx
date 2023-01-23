import { Container,Row, Col } from "solid-bootstrap";
import dropd_logo from '../dropd_logo.png';

// Get current year
function getYear(){
	return new Date().getFullYear();
}

export function Footer() {
	return (
		<Container fluid class="footer-container-color">
		<Row>
		<footer class="row py-5 my-5">
			<Col sm={4}>
				<a href="/" class="d-flex">
					<img alt="DROPD" src={dropd_logo} width="150" height="35"/>
				</a>
				<br />
				<p>
				Connecting sellers and buyers through entertaining shopping experiences. <br />For Enquiries: info@dropd.live
				</p>
				
			</Col>

			{/* <Col></Col> */}

			<Col sm={2}>
				<h5>Company</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2"><a href="#" class="nav-link p-0">Privacy Policy</a></li>
					<li class="nav-item mb-2"><a href="#" class="nav-link p-0">Terms of Service</a></li>
					
				</ul>
			</Col>

			<Col sm={2}>
				<h5>Additional Links</h5>
				<ul class="nav flex-column">
					<li class="nav-item mb-2"><a href="#" class="nav-link p-0">Support</a></li>
					<li class="nav-item mb-2"><a href="#" class="nav-link p-0">Press Kit</a></li>
					
				</ul>
			</Col>

			<Col sm={4}>
				<h5>Follow Us</h5>
	
				<ul class="nav flex-column list-unstyled">
					<li class="nav-item mb-2"> 
						<a  href="#"><i class="bi bi-instagram"></i></a>&nbsp;
						<a  href="#"><i class="bi bi-facebook"></i></a>&nbsp;
						<a  href="#"><i class="bi bi-twitter"></i></a>&nbsp;
						<a  href="#"><i class="bi bi-linkedin"></i></a>&nbsp;
						<a  href="#"><i class="bi bi-pinterest"></i></a>&nbsp;
					</li>
					
				</ul>
				
			</Col>
			
		</footer>
		<hr></hr>
		<p class="text-center">© {getYear()} Copyright DROPD, Inc . All Rights Reserved </p>
		</Row>
		</Container>
		
		)


	
}
