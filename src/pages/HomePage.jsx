import { Container, Col, Row } from "react-bootstrap";
import HomepageImage from "../assets/images/fishing-homepage.jpg";
import SimpleSearch from "../components/SimpleSearch/SimpleSearch";
import HotBites from "../components/HotBites/HotBites";
import AdvanceSearch from "../components/AdvanceSearch/AdvanceSearch";

export default function HomePage() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            className="m-n5 d-md-none"
            md={9}
            style={{ backgroundColor: "rgb(5, 74, 212)", height: "17vh" }}
          >
            <SimpleSearch />
          </Col>
          <Col className="d-sm-none d-md-flex">
            <AdvanceSearch />
          </Col>
          <Col className="mt-5">
            <HotBites />
          </Col>
        </Row>
      </Container>
    </>
  );
}
