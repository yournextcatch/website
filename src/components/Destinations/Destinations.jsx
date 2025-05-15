import { Card, Col, Container, Row } from "react-bootstrap";
import SanPedroImg from "../../assets/images/san-pedro.jpg";
import NewportLandingsImg from "../../assets/images/newportLandings.jpg";
import DanaPointImg from "../../assets/images/danaPointLandings.jpg";

function Destinations() {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex flex-row">
          <Col>
            <Card className="d-block">
              <img
                src={SanPedroImg}
                alt="San Pedro"
                style={{ width: "100%", height: "auto" }}
              />
              <h1>San Pedro</h1>
            </Card>
          </Col>
          <Col>
            <Card>
              <img
                src={NewportLandingsImg}
                alt="Newport Landings"
                style={{ width: "100%", height: "auto" }}
              />
              <h1>Newport Beach</h1>
            </Card>
          </Col>
          <Col>
            <Card>
              <img
                src={DanaPointImg}
                alt="Dana Point"
                style={{ width: "100%", height: "auto" }}
              />
              <h1>Dana Point</h1>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Row>
      </Container>
    </>
  );
}

export default Destinations;
