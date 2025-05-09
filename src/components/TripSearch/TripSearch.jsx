import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import FishingBackgroundImg from "../../assets/images/fishing-homepage.jpg";

const cities = ["Long Beach", "Los Angeles", "San Diego", "Santa Barbara"];

export default function TripSearch() {
  const [formData, setFormData] = useState({
    city: "",
    date: "",
    tripTypes: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedTrips = checked
          ? [...prev.tripTypes, value]
          : prev.tripTypes.filter((t) => t !== value);
        return { ...prev, tripTypes: updatedTrips };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  return (
    <>
      <Container
        className="d-flex justify-content-center"
        style={{
          backgroundImage: `url(${FishingBackgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          opacity: 0.8,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0",
          margin: "0",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
        fluid
      >
        <Card style={{ width: "30rem", height: "40vh" }} className="p-4">
          <Card.Title className="mb-4">Find Your Next Trip</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="searchTrips">
              <Form.Select
                onChange={handleChange}
                name="city"
                aria-label="Default select example"
                value={formData.city}
              >
                <option value="">Starting City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Trip Type</Form.Label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <label>1/2 Day</label>
                  <Form.Check
                    type="checkbox"
                    name="tripTypes"
                    value="halfDay"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Full Day</label>
                  <Form.Check
                    type="checkbox"
                    name="tripTypes"
                    value="fullDay"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Overnight</label>
                  <Form.Check
                    type="checkbox"
                    name="tripTypes"
                    value="overnight"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}
