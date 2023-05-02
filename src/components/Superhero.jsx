import { Card, Col, Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Superhero = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovies();
	}, []);

	const getMovies = async () => {
		const response = await axios.get("http://localhost:5000/movies");
		// console.log(response.data[1]);
		setMovies(response.data[1]);
	}
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
					{movies.map((movie, index) => (
						<Col xs={3} key={index}>
							<Card>
								<Card.Img variant="top" src={movie.image} className="imgMovie" />
								<Card.Body>
									<Card.Title>{movie.title}</Card.Title>
									<Card.Text>
										{movie.body}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}
export default Superhero;