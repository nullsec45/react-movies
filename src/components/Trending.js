import {Card,Col, Row, Container} from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
const Trending=() =>
{
	return (
		<div>
			<Container>
				<Row id="trending">
					<Col> 
					   <h1 className="text-center text-white mt-4">Trending Movies</h1>
					</Col>
				</Row>
				<Row className="mt-4" >
				   {/*film 1*/}
					<Col xs={3}>
					  <Card>
					      <Card.Img variant="top" src={duneImage} className="imgMovie" />
					      <Card.Body>
					        <Card.Title>Card Title</Card.Title>
					        <Card.Text>
					          Some quick example text to build on the card title and make up the
					          bulk of the card's content.
					        </Card.Text>
					      </Card.Body>
					   </Card>
					</Col>

				    {/*film2*/}
					<Col xs={3}>
					  <Card>
					      <Card.Img variant="top" src={everythingImage} className="imgMovie" />
					      <Card.Body>
					        <Card.Title>Card Title</Card.Title>
					        <Card.Text>
					          Some quick example text to build on the card title and make up the
					          bulk of the card's content.
					        </Card.Text>
					      </Card.Body>
					   </Card>
					</Col>

				   {/*film 3*/}
				   <Col xs={3}>
					  <Card>
					      <Card.Img variant="top" src={infiniteImage} className="imgMovie" />
					      <Card.Body>
					        <Card.Title>Card Title</Card.Title>
					        <Card.Text>
					          Some quick example text to build on the card title and make up the
					          bulk of the card's content.
					        </Card.Text>
					      </Card.Body>
					   </Card>
					</Col>

					{/*film 4*/}
					<Col xs={3}>
					  <Card>
					      <Card.Img variant="top" src={jokerImage} className="imgMovie" />
					      <Card.Body>
					        <Card.Title>Card Title</Card.Title>
					        <Card.Text>
					          Some quick example text to build on the card title and make up the
					          bulk of the card's content.
					        </Card.Text>
					      </Card.Body>
					   </Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Trending;