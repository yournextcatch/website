import { useState } from "react";
import { Card, Container, Col, Row, Form, Button } from "react-bootstrap";

const cities = [
  "Long Beach",
  "Los Angeles",
  "San Diego",
  "Santa Barbara",
  "San Francisco",
  "Seattle",
  "Miami",
  "New York",
];

function AdvanceSearch() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    city: "",
    date: today,
    tripTypes: [],
  });

  function handleChange(e) {
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
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card className="text-center p-3">
              <Form>
                <Form.Group className="mb-3">
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
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button
                  className="w-100"
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Search
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdvanceSearch;
