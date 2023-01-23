import { Container, Row, Card, Col, Button, Image, Figure } from "solid-bootstrap";
import { createEffect, createSignal, createResource, For } from 'solid-js';
import { useNavigate} from "@solidjs/router";


const [whatsnew, setWhatsNew] =  createSignal();


createResource(async () => {
	const res = await fetch(`/src/data/whats_new.json`)
	const json = await res.json()
	setWhatsNew(json.allStreams)
});



function WhatsNewCard({show}){
	
	// Add and remove card shadow when hovering over it'
	const [isShadow, setisShadow] = createSignal('');
	const navigate = useNavigate();

	function AddCardShadow(){
		setisShadow(isShadow => 'shadow');
	}
		
	
	function RemoveCardShadow(){
		setisShadow(isShadow => '');
	}


	function HandleClick(e){
		const showid =  e.currentTarget.getAttribute('data_id');
		
		navigate('/watch/'+showid, {replace: true});
	}

	return (
		<Col class="d-flex align-items-stretch">
			<Card style={{ width: '18rem', cursor: 'pointer' }} class={isShadow()} data_id={show.showID} onMouseOver={AddCardShadow} onMouseOut={RemoveCardShadow} onClick={HandleClick}>
				<Card.Img variant="top" src={show.liveThumbnailURL} />
				<Card.Body>
					<Card.Title style="font-size:0.8em;">{show.liveStreamTitle}</Card.Title>
					<Card.Text>
						<Col xs={6} md={12}>
      							<Image src={show.actor_Host_Image_URL} roundedCircle thumbnail width={40} height={40}/> 
							&nbsp;<Figure><Figure.Caption><small>{show.actorName}</small></Figure.Caption></Figure>
    						</Col>
					</Card.Text>
					
				</Card.Body>
			</Card>
		</Col>
	)
}

export function WhatsNewShows(){
	
	return (
		<Container>
			<h1>What's New</h1>

			<Row md={4} class="g-4">
				<For each={whatsnew()}>
					{(show) => <WhatsNewCard show={show} />}
				</For>
				
			</Row>
		</Container>
	);
}
