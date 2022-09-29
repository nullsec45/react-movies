import {Card,Col, Row, Container} from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanCover from "../assets/images/superhero/spiderman-cover.jpg";

const Superhero=() =>
{
	return (
		<div>
			<Container>
				<Row id="superhero">
					<Col>
				      <h1 className="text-center text-white mt-4">Superhero Movies</h1>
					</Col>
				</Row>
				<Row className="mt-4" id="superhero">
				   {/*film 1*/}
					<Col xs={3}>
					  <Card>
					      <Card.Img variant="top" src={antmanImage} className="imgMovie" />
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
					      <Card.Img variant="top" src={avengerImage} className="imgMovie" />
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
					      <Card.Img variant="top" src={batmanImage} className="imgMovie" />
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
					      <Card.Img variant="top" src={robinhoodImage} className="imgMovie" />
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

export default Superhero;