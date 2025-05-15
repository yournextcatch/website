import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
} from "react-bootstrap";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import SearchBGImage from "../../assets/images/fishing-homepage.jpg";

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

const fishSpecies = [
  "Albacore (Tuna)",
  "Barracuda (Great)",
  "Barracuda (Pacific)",
  "Bass (Largemouth)",
  "Bass (Striped)",
  "Bass (Spotted)",
  "Bluefin (Tuna)",
  "Bonito",
  "Calico Bass",
  "California Sheephead",
  "Cod",
  "Crab",
  "Dolphin (Mahi Mahi)",
  "Halibut",
  "Lingcod",
  "Lobster",
  "Marlin (Blue)",
  "Marlin (Striped)",
  "Ray",
  "Rockfish",
  "Sand Bass",
  "Scorpionfish",
  "Sculpin",
  "Seabass (White)",
  "Shark (Leopard)",
  "Shark (Mako)",
  "Shark (Thresher)",
  "Sheepshead",
  "Sierra Mackerel",
  "Snapper (Red)",
  "Snapper (Vermilion)",
  "Swordfish",
  "Triggerfish (Gray)",
  "Tuna (Skipjack)",
  "Yellowtail Amberjack",
  "Yellowfin (Tuna)",
  "Tuna (Bigeye)",
];

const ammenities = [
  "Toilet",
  "Air Conditioning",
  "Fighting Chair",
  "Disabled Access",
  "First Mate",
  "You Keep Catch",
  "Sleepers",
  "Food & Drinks For Sale",
];

function AdvanceSearch() {
  const today = new Date().toISOString().split("T")[0];

  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [formData, setFormData] = useState({
    city: "",
    date: today,
    tripTypes: [],
    adults: 0,
    children: 0,
    tripLength: "",
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

  function handleAdvancedSearchToggle() {
    setAdvancedSearch((prev) => !prev);
    setShowAdvanced((prev) => !prev);
  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card
              className="text-center p-3 bg-white"
              style={{
                backgroundImage: `url(${SearchBGImage})`,
                backgroundSize: "cover",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(5px)",
                color: "white",
                padding: "20px",
                margin: "0 auto",
                maxWidth: "600px",
                border: "none",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Form>
                <Form.Group className="mb-3">
                  <Form.Select
                    onChange={handleChange}
                    name="city"
                    aria-label="Default select example"
                    value={formData.city}
                  >
                    <option value="">Departing Port</option>
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
                <div className="d-flex flex-row mb-3">
                  <Col col={2}>
                    <Form.Group className="mb-3">
                      <Form.Select
                        onChange={handleChange}
                        name="tripLength"
                        value={formData.tripLength}
                        required
                      >
                        <option value="">Trip Length</option>
                        {["<1", 2, 3, 4, "5+"].map((trip, index) => (
                          <option key={index} value={trip}>
                            {trip}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col col={8}>
                    <Form.Group className="mb-3">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="w-100"
                        >
                          {`${formData.adults} Adults, ${formData.children} Children`}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="p-3 w-100">
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
                  </Col>
                </div>
                {!showAdvanced ? (
                  <Button
                    variant="outline-secondary w-100"
                    onClick={handleAdvancedSearchToggle}
                    className="mb-3"
                  >
                    Advanced Search
                    <ArrowDown className="m-1" />
                  </Button>
                ) : (
                  <>
                    <Form.Group className="mb-3">
                      <Dropdown>
                        <Dropdown.Toggle variant="warning" className="w-100">
                          Fish Type
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="p-3 w-100">
                          {Array.from(
                            { length: Math.ceil(fishSpecies.length / 4) },
                            (_, i) => (
                              <div className="d-flex mb-2" key={i}>
                                {fishSpecies
                                  .slice(i * 4, i * 4 + 4)
                                  .map((species, index) => (
                                    <div className="flex-fill me-2" key={index}>
                                      <Form.Check
                                        type="checkbox"
                                        label={species}
                                        value={species}
                                        onChange={handleChange}
                                        name="tripTypes"
                                        checked={formData.tripTypes.includes(
                                          species
                                        )}
                                      />
                                    </div>
                                  ))}
                              </div>
                            )
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                    <Form.Group>
                      <Dropdown className="w-100 mb-3">
                        <Dropdown.Toggle className="w-100" variant="warning">
                          Amenities
                          <Dropdown.Menu className="p-3 w-100">
                            {Array.from(
                              { length: Math.ceil(ammenities.length / 4) },
                              (_, i) => (
                                <div className="d-flex mb-2" key={i}>
                                  {ammenities
                                    .slice(i * 4, i * 4 + 4)
                                    .map((amenity, index) => (
                                      <div
                                        className="flex-fill me-2"
                                        key={index}
                                      >
                                        <Form.Check
                                          type="checkbox"
                                          label={amenity}
                                          value={amenity}
                                          onChange={handleChange}
                                          name="tripTypes"
                                          checked={formData.tripTypes.includes(
                                            amenity
                                          )}
                                        />
                                      </div>
                                    ))}
                                </div>
                              )
                            )}
                          </Dropdown.Menu>
                        </Dropdown.Toggle>
                      </Dropdown>
                    </Form.Group>
                    <Button
                      variant="outline-secondary w-100"
                      onClick={handleAdvancedSearchToggle}
                      className="mb-3"
                    >
                      Hide Advanced Search
                      <ArrowUp className="m-1" />
                    </Button>
                  </>
                )}
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
