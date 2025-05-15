import { Navbar, Nav, Button, Container } from "react-bootstrap";

export default function NavBar({ isAuthenticated, user, onLogin, onLogout }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Socal Fishing Charters</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/destinations/Sample">Destinations</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Navbar.Text className="me-2">
                  Signed in as: {user?.profile?.email}
                </Navbar.Text>
                <Button variant="outline-danger" onClick={onLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button variant="outline-primary" onClick={onLogin}>
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
