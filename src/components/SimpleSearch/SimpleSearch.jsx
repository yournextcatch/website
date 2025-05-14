import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Dropdown,
} from "react-bootstrap";

function SimpleSearch() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    date: today,
    adults: 0,
    children: 0,
  });

  const handleIncrement = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] + 1,
    }));
  };

  const handleDecrement = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] > 0 ? prev[field] - 1 : 0,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", formData);
    // Add submission logic here
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card className="p-3">
              <Form onSubmit={handleSearchSubmit}>
                <Form.Group className="mb-3" controlId="formDate">
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic"
                      className="w-100"
                    >
                      {`${formData.adults} Adults, ${formData.children} Children`}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-3" style={{ width: "250px" }}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>Adults</span>
                        <div className="d-flex align-items-center">
                          <Button
                            size="sm"
                            variant="outline-secondary"
                            onClick={() => handleDecrement("adults")}
                          >
                            −
                          </Button>
                          <span className="mx-2">{formData.adults}</span>
                          <Button
                            size="sm"
                            variant="outline-secondary"
                            onClick={() => handleIncrement("adults")}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Children</span>
                        <div className="d-flex align-items-center">
                          <Button
                            size="sm"
                            variant="outline-secondary"
                            onClick={() => handleDecrement("children")}
                          >
                            −
                          </Button>
                          <span className="mx-2">{formData.children}</span>
                          <Button
                            size="sm"
                            variant="outline-secondary"
                            onClick={() => handleIncrement("children")}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100">
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

export default SimpleSearch;
