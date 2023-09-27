import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const SearchMovies = () => {
	const [title, setTitle] = useState("");
	const [result, setResult] = useState([]);
	const searchAction = (event) => {
		event.preventDefault();
		let searchTitle = new RegExp(title, "gi")
		let dataMovies = [];

		if (title.trim("") === "") {
			alert("Input tidak boleh kosong!");
			return false;
		}
		axios.get("http://localhost:5000/movies").then(res => {
			res.data.map(data => data.map(data => {
				if (searchTitle.test(data.title)) {
					dataMovies.push(data);
				}
			}));
			setResult(dataMovies);
			// res.data.map(data => {
			// 	const resultMovies = data.filter((obj) => {
			// 		return searchTitle.test(obj.title);
			// 	})
			// 	setResult(resultMovies);
			// })
			if (dataMovies.length === 0) {
				alert("Film yang anda cari tidak ditemukan!.");
			}
		})

	}
	return (
		<div>
			<Container>
				<Row id="search">
					<Col>
						<h1 className="text-center text-white mt-4">Search Movies</h1>
					</Col>
				</Row>
				<Row>
					<Col className="mt-5">
						<InputGroup className="mb-3">
							<Form.Control type="text" placeholder="Search Movies ..." value={title} onChange={(event) => setTitle(event.target.value)} />
							<Button variant="primary" id="button-addon2" onClick={(event) => searchAction(event)}>
								Button
							</Button>
						</InputGroup>
					</Col>
				</Row>
				<Row className="mt-4" >
					{result && result.map((movie, index) => (
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
	)
}

export default SearchMovies;