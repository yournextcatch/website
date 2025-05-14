// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
// import Dropdown from "react-bootstrap/Dropdown";
// import "./NavBar.css";

// export default function NavBar({ isStoreAvailable }) {
//   // Simulated auth state — replace with actual auth logic
//   const [user, setUser] = useState({
//     isLoggedIn: true,
//     name: "Captain Mike",
//     avatarUrl: "https://i.pravatar.cc/40?u=capmike",
//   });

//   const handleLogout = () => {
//     console.log("User logged out");
//     // Replace with actual logout logic
//     setUser({ isLoggedIn: false });
//   };

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         {/* <img src="" alt="Socal Fishing Charters Logo" className="logo-img" /> */}
//         <Navbar.Brand href="/"></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/pricing">Trips</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//             <Nav.Link href="/blog">Blog</Nav.Link>
//             {isStoreAvailable && <Nav.Link href="/store">Store</Nav.Link>}
//           </Nav>

//           {/* <Nav className="ms-auto">
//             {user.isLoggedIn ? (
//               <Dropdown align="end">
//                 <Dropdown.Toggle
//                   variant="link"
//                   id="dropdown-user"
//                   className="p-0 border-0"
//                 >
//                   <img
//                     src={user.avatarUrl}
//                     alt="User Avatar"
//                     className="rounded-circle"
//                     style={{
//                       width: "40px",
//                       height: "40px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item href="/account">Account</Dropdown.Item>
//                   <Dropdown.Divider />
//                   <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             ) : (
//               <>
//                 <Button
//                   variant="outline-primary"
//                   href="/login"
//                   className="me-2"
//                 >
//                   Login
//                 </Button>
//                 <Button variant="primary" href="/signup">
//                   Sign Up
//                 </Button>
//               </>
//             )}
//           </Nav> */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// #2 HERE

// import { useState } from "react";
// import { Container, Nav, Button } from "react-bootstrap";
// import { List } from "react-bootstrap-icons";
// import NavbarBoatImage from "../../assets/images/boatsNavBar.jpg";

// export default function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   return (
//     <div>
//       <Container
//         className="d-flex justify-content-between align-items-center"
//         style={{
//           backgroundImage: `url(${NavbarBoatImage})`,
//           width: "100%",
//         }}
//       >
//         <div className="fw-bold fs-4">MyApp</div>

//         {/* Hamburger icon on mobile */}
//         <div className="d-md-none">
//           <Button variant="outline-secondary" onClick={toggleMenu}>
//             <List size={24} />
//           </Button>
//         </div>

//         {/* Nav links on desktop */}
//         <Nav className="d-none d-md-flex">
//           <Nav.Link href="#about">About</Nav.Link>
//           <Nav.Link href="#contact">Contact</Nav.Link>
//           <Nav.Link href="#blog">Blog</Nav.Link>
//         </Nav>
//       </Container>

// #3 HERE

import { useState } from "react";
import { Button, Col, Container, Dropdown, Nav, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import ReactLogo from "../../assets/images/logo512.png";

function NavBar({ user, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = false;

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      {/* // DESKTOP VIEW */}
      <Container
        className="d-none d-md-flex justify-content-between align-items-center"
        style={{
          height: "10vh",
          background:
            "linear-gradient(180deg, rgb(5, 117, 186) 0%, rgb(7, 94, 187) 35%, rgb(5, 74, 212) 100%)",
        }}
        fluid
      >
        <div className="fw-bold fs-4">
          <img
            src={ReactLogo}
            alt="Company Logo"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>

        <Nav className="ms-auto">
          {user ? (
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
              <Button variant="outline-primary" href="/login" className="me-2">
                Login
              </Button>
              <Button variant="primary" href="/signup">
                Sign Up
              </Button>
            </>
          )}
        </Nav>
      </Container>

      {/* // MOBILE VIEW */}
      <Container
        className="d-md-none w-full pt-3"
        style={{
          height: "10vh",
          background:
            "linear-gradient(180deg, rgb(5, 117, 186) 0%, rgb(7, 94, 187) 35%, rgb(5, 74, 212) 100%)",
        }}
      >
        <Row>
          <Col>
            <img
              src={ReactLogo}
              alt="Company Logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Col>
          <Col></Col>
          <Col>
            <Button
              variant="outline-secondary"
              onClick={toggleMenu}
              className="bg-gray-100"
            >
              <List size={24} />{" "}
            </Button>
          </Col>
        </Row>
      </Container>

      {menuOpen && (
        <div className="d-md-none bg-white">
          <Col className="flex-column text-center py-2">
            <Row>
              <Button
                onClick={() => setMenuOpen(false)}
                className="mb-2"
                href="/about"
              >
                About
              </Button>
            </Row>
            <Row href="#contact" onClick={() => setMenuOpen(false)}>
              <Button
                onClick={() => setMenuOpen(false)}
                className="mb-2"
                href="/contact"
              >
                Contact
              </Button>
            </Row>
            <Row href="#blog" onClick={() => setMenuOpen(false)}>
              <Button onClick={() => setMenuOpen(false)} className="mb-2">
                Blog
              </Button>
            </Row>
          </Col>
        </div>
      )}
    </>
  );
}

export default NavBar;
