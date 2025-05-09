import React from "react";
import { Container, Card } from "react-bootstrap";

function BiteCards({ title, article }) {
  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <Card className="m-3">
        <Card.Header>
          <h2>{title}</h2>
        </Card.Header>
        <Card.Body>
          <p>{article}</p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BiteCards;
