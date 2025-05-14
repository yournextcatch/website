import { Container, Col, Row } from "react-bootstrap";
import SimpleSearch from "../components/SimpleSearch/SimpleSearch";
import HotBites from "../components/HotBites/HotBites";
import AdvanceSearch from "../components/AdvanceSearch/AdvanceSearch";

export default function HomePage() {
  return (
    <>
      <Container fluid>
        {/* SimpleSearch: visible only on small screens */}
        <Row className="d-md-none">
          <Col style={{ backgroundColor: "rgb(5, 74, 212)", height: "17vh" }}>
            <SimpleSearch />
          </Col>
        </Row>

        {/* AdvanceSearch & HotBites side by side on md+ screens */}
        <Row className="d-none d-md-flex">
          <Col md={8}>
            <AdvanceSearch />
          </Col>
          <Col md={4} className="mt-5 mt-md-0">
            <HotBites />
          </Col>
        </Row>

        {/* HotBites always shown on small screens (below SimpleSearch) */}
        <Row className="d-md-none">
          <Col className="mt-5">
            <HotBites />
          </Col>
        </Row>
      </Container>
    </>
  );
}
