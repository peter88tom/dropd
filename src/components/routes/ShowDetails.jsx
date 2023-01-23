import { Col, Container, Row, } from "solid-bootstrap";
import { useParams } from "@solidjs/router";
import { createEffect, createResource, createSignal } from "solid-js";



export default function ShowDetails() {
        
	const [video, setVideo] = createSignal();
	const params = useParams();


	createResource(async () => {
		const res = await fetch(`/src/data/featured.json`);
		const json = await res.json();
		setVideo(json.allStreams.filter(s=>s.id == params.slug)[0]);
		
		//console.log(video().videoLinkURI);
	});
//console.log(video());

	
	return (
		<Container fluid class="featured-show-container">
			{/* <h1>Show Details Single product - id: {params.slug}</h1> */}
			<Row>
				
				<Col sm={8}>
					<video class="w-100" controls>
						 <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4" /> 
						
					</video>
				</Col>
				<Col fluid sm={4}>

					<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
						<li class="nav-item" role="presentation">
							<button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Chat</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Details</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Shop</button>
						</li>
					</ul>
					<div class="tab-content" id="pills-tabContent">
						<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Chart</div>
						<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Details</div>
						<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Shop</div>
					</div>

				</Col>
			</Row>
		</Container>
	)
}