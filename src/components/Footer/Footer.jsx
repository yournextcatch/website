import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container
        fluid
        className="bg-dark text-center py-3"
        style={{ height: "100px" }}
      >
        <Row className="justify-content-center">
          <div className="text-light">
            <p className="mb-0">© 2025 Your Next Catch</p>
            <p className="mb-0">All rights reserved.</p>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
