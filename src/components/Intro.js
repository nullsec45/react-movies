import {Col, Container, Row} from "react-bootstrap";


const Intro=() => {
 return(	
 	<div className="intro">
      	<Container className="text-white text-center d-flex justify-content-center align-items-center">
      		<Row>
      			<Col>
      				<div className="title">NONTON GRATIS</div>
      				{<div className="title">GAK PAKE KARCIS</div>}
      			</Col>
      		</Row>
      	</Container>
      </div>
    )
}

export default Intro;