import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "./NavBar.css";

export default function NavBar({ isStoreAvailable }) {
  // Simulated auth state — replace with actual auth logic
  const [user, setUser] = useState({
    isLoggedIn: true,
    name: "Captain Mike",
    avatarUrl: "https://i.pravatar.cc/40?u=capmike",
  });

  const handleLogout = () => {
    console.log("User logged out");
    // Replace with actual logout logic
    setUser({ isLoggedIn: false });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <img src="" alt="Socal Fishing Charters Logo" className="logo-img" /> */}
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/pricing">Trips</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            {isStoreAvailable && <Nav.Link href="/store">Store</Nav.Link>}
          </Nav>

          {/* <Nav className="ms-auto">
            {user.isLoggedIn ? (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-user"
                  className="p-0 border-0"
                >
                  <img
                    src={user.avatarUrl}
                    alt="User Avatar"
                    className="rounded-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/account">Account</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Button
                  variant="outline-primary"
                  href="/login"
                  className="me-2"
                >
                  Login
                </Button>
                <Button variant="primary" href="/signup">
                  Sign Up
                </Button>
              </>
            )}
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
