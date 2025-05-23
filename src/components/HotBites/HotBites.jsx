import { useState, useEffect } from "react";
import BiteCard from "../BiteCard/BiteCard";
import { Container } from "react-bootstrap";
import * as HotBitesApi from "../../utilities/api/HotBitesApi";

function HotBites() {
  const [hotBites, setHotBites] = useState([]);

  useEffect(() => {
    async function getAllBites() {
      const hotBites = await HotBites.getAllBites();

      setHotBites(hotBites);
    }
  }, []);

  return (
    <>
      <Container style={{ display: "flex", flexDirection: "column" }}>
        {hotBites.map((bite, index) => (
          <BiteCard
            key={index}
            title={bite.title}
            article={bite.article.slice(0, 50)}
          />
        ))}
      </Container>
    </>
  );
}

export default HotBites;
