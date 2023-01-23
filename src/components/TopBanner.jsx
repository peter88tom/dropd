import { Carousel } from "solid-bootstrap";


function TopBanner() {
	return <Carousel>
		<Carousel.Item>
			<div
				class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
				style={{ height: "400px" }}
			>

			</div>
			<Carousel.Caption>
				<h2>First slide label</h2>
				<p>
					Nulla vitae elit libero, a pharetra augue mollis interdum.
				</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<div
				class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
				style={{ height: "400px" }}
			>

			</div>

			<Carousel.Caption>
				<h2>Second slide label</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<div
				class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
				style={{ height: "400px" }}
			>

			</div>

			<Carousel.Caption>
				<h2>Third slide label</h2>
				<p>
					Praesent commodo cursus magna, vel scelerisque nisl
					consectetur.
				</p>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>;
}

export default TopBanner;