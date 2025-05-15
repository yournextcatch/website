import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SanPedroImg from "../../assets/images/san-pedro.jpg";
import NewportLandingsImg from "../../assets/images/newportLandings.jpg";
import DanaPointImg from "../../assets/images/danaPointLandings.jpg";

function Destinations() {
  const navigate = useNavigate();

  const destinations = [
    { name: "san-pedro", displayName: "San Pedro", image: SanPedroImg },
    {
      name: "newport-beach",
      displayName: "Newport Beach",
      image: NewportLandingsImg,
    },
    { name: "dana-point", displayName: "Dana Point", image: DanaPointImg },
  ];

  const handleCardClick = (destinationName) => {
    navigate(`/destinations/${destinationName}`);
  };

  return (
    <Container className="mt-5">
      <Row className="d-flex flex-row">
        {destinations.map((dest) => (
          <Col key={dest.name}>
            <Card
              className="d-block"
              onClick={() => handleCardClick(dest.name)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={dest.image}
                alt={dest.displayName}
                style={{ width: "100%", height: "auto" }}
              />
              <h1>{dest.displayName}</h1>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Destinations;
