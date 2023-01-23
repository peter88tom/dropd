import { FeaturedShows } from "./FeaturedShows";
import  { WhatsNewShows } from "./WhatNewShows";
import { ForYouShows } from "./ForYouShows";
import { PastLiveShows } from "./PastLiveShows";
import { Routes,Route } from "@solidjs/router";

// Import style
import "./Custom.css";

function ShowsBody(){
	return (
	<div style={{ "background-color": "white"}}>
		<FeaturedShows />
		<WhatsNewShows />
		<ForYouShows />
		<PastLiveShows />
		
	</div> );
}


export default ShowsBody;