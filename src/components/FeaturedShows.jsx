import { Container, Row, Card, Col, Button, Image, Figure, Nav } from "solid-bootstrap";
import { createEffect, createSignal, createResource, For,  } from 'solid-js';
import { useNavigate} from "@solidjs/router";

/*
  Check this SolidJs documentation on how to fetch data from remote source
  1.https://www.solidjs.com/docs/latest/api#createresource
  2.https://www.infoworld.com/article/3643331/hands-on-with-the-solid-javascript-framework.html
*/

/*
const fetch_featured_shows = async () => {
	const res = await fetch(`./src/featured.json`)
	const json = await res.json();
	return json.allStreams;
}
*/

const [shows, setshows] = createSignal();

// Need to enable CORS forthhis to work, otherwise use the local data
/*createResource(async () => {
		const res = await fetch(`https://dropdliveapp.com/featuredRow1.php?userID=12111`)
		const json = await res.json()
		setshows(json.allStreams)
})*/


createResource(async () => {
	const res = await fetch(`/src/data/featured.json`)
	const json = await res.json()
	setshows(json.allStreams)
})
	

// Card
function FeaturedShowsCard({show}) {

	// Add and remove card shadow when hovering over it'
	const [isShadow, setisShadow] = createSignal('');
	const navigate = useNavigate();

	function AddCardShadow(){
		setisShadow(isShadow => 'shadow-lg bg-body');
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
			 
			<Card style={{ width: '18rem', cursor: 'pointer' }} data_id={show.showID} class={isShadow()} onMouseOver={AddCardShadow} onMouseOut={RemoveCardShadow} onClick={HandleClick}>
				<Card.Img variant="top" src={show.liveThumbnailURL} />
				<Card.Body>
					<Card.Title style="font-size:0.8em;">{show.liveStreamTitle}</Card.Title>
					<Card.Text>
						<Col xs={6} md={12}>
      							<Image src={show.actor_Host_Image_URL} roundedCircle thumbnail width={40} height={40}/> 
							&nbsp;<Figure><Figure.Caption><small>By {show.actorName}</small></Figure.Caption></Figure>
    						</Col>
					</Card.Text>
					{/* <Button variant="primary">Go somewhere</Button> */}
				</Card.Body>
			</Card>
			
			
		        
		</Col>
	);
}


// Main
export function FeaturedShows() {

	//const [shows] = createResource(fetch_featured_shows);

	return (
		<Container class="featured-show-container">
			<h1>Featured Shows</h1>

			<Row md={4} class="g-4">
				<For each={shows()}>
					{(show) => <FeaturedShowsCard show={show} />}
				</For>
				
			</Row>
		</Container>
	);
}

