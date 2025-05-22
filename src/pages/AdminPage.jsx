import { useState } from "react";
import AdminNav from "../components/AdminComponents/AdminNav";
import { Col, Container, Row } from "react-bootstrap";
import ListBites from "../components/AdminComponents/ListBites";
import ListBookedTrips from '../components/AdminComponents/ListBookedTrips'
import StoreSettings from '../components/AdminComponents/StoreSettings'

function AdminPage() {
  const [selectedView, setSelectedView] = useState('')

  const renderSelectedView = () => {
    switch (selectedView) {
      case 'hotBite':
        return <ListBites />;
      case 'bookedTrips':
        return <ListBookedTrips />;
      case 'store':
        return <StoreSettings />;
      default:
        return <div>Please select a view from the left menue</div>
    }
  }
  return (
    <>
      <Container fluid>
        <Row >
          <Col md={3}>
            <AdminNav onSelectView={setSelectedView} />
          </Col>
          <Col md={9}>
            {renderSelectedView()}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AdminPage;

