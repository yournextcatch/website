import { useState, useEffect } from "react";
import * as HotBitesApi from "../../utilities/api/HotBitesApi";
import { Button, Container, Table } from "react-bootstrap";
import { Pen, XCircle } from "react-bootstrap-icons";

function ListBites() {
  const [hotBites, setHotBites] = useState([]);

  useEffect(() => {
    async function getAllBites() {
      const hotBites = await HotBitesApi.getAllHotBites();

      setHotBites(hotBites);
    }
    getAllBites();
  }, []);

  console.log(hotBites);

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
                  <Button variant="outlined">
                    <Pen />
                  </Button>
                </td>
                <td>
                  <Button variant="outlined">
                    <XCircle />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default ListBites;
