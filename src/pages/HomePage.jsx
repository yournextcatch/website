import { Container, Card, Col, Row } from "react-bootstrap";
import HomepageImage from "../assets/images/fishing-homepage.jpg";
import TripSearch from "../components/TripSearch/TripSearch";
import HotBites from "../components/HotBites/HotBites";

export default function HomePage() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={9} style={{ height: "85vh" }}>
            <TripSearch />
          </Col>
          <Col>
            <HotBites />
          </Col>
        </Row>
      </Container>
      {/* <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${HomepageImage})`,
          height: "85vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          position: "absolute",
        }}
      >
        <Card
          className="bg-light text-dark text-center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.45)",
            borderColor: "rgba(255, 255, 255, 0.95)",
            width: "50%",
            height: "2.5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1>Coming Soon</h1>
        </Card>
      </Container> */}
    </>
  );
}
