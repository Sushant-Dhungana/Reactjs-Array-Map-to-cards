import React from "react";
import { getCardinfo } from "./data";
import { Row, Col, Container, CardGroup, Button, Card } from "react-bootstrap";

function Homecard() {
  const cardinfo = getCardinfo();
  return (
    <>
      <Container className="mx-auto align-items-center">
        <Row xs={12} md={1} className="g-3">
          <CardGroup>
            {cardinfo.map((card, index) => (
              <Col className="mt-4 align-items-center" key={index}>
                {/* <div className="col-md-4" key={index}> */}
                <Card style={{ width: "18rem" }} key={index} className="box ">
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <p className="price">{card.price}</p>
                    <Button>Click Me</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </CardGroup>
        </Row>
      </Container>
    </>
  );
}

export default Homecard;
