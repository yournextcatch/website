import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as HotBitesApi from "../../utilities/api/HotBitesApi";
import { Button, Container, Table } from "react-bootstrap";
import { Pen, XCircle } from "react-bootstrap-icons";
import { Modal } from "react-bootstrap";

function ListBites() {
  const navigate = useNavigate();
  const [hotBites, setHotBites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [biteToDelete, setBiteToDelete] = useState(null);

  useEffect(() => {
    async function getAllBites() {
      const hotBites = await HotBitesApi.getAllHotBites();

      setHotBites(hotBites);
    }
    getAllBites();
  }, []);

  // function handleEditBite(id) {
  //   navigate(`/admin/hotbites/${id}`);
  // }

  async function handleDelete() {
    if (biteToDelete) {
      await HotBitesApi.deleteBite(biteToDelete.id);
      setHotBites((prev) => prev.filter((bite) => bite.id !== biteToDelete.id));
      setShowModal(false);
    }
  }

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Contents</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {hotBites.map((bite, idx) => (
              <tr key={idx}>
                <td>{bite.title}</td>
                <td>
                  {bite.article.slice(0, 50)}
                  {bite.article.length > 50 ? "..." : ""}
                </td>
                <td>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/admin/hotbites/${bite._id}`)}
                  >
                    <Pen />
                  </Button>
                </td>
                <td>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setBiteToDelete(bite);
                      setShowModal(true);
                    }}
                  >
                    <XCircle />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Confirmation to delete <strong>{biteToDelete?.title}</strong>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default ListBites;
