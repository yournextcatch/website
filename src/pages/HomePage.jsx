import { Container, Card } from "react-bootstrap";
import HomepageImage from "../assets/images/fishing-homepage.jpg";

export default function HomePage() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${HomepageImage})`,
        height: "100vh",
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
    </Container>
  );
}
