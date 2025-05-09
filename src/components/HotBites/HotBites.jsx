import { useState, useEffect } from "react";
import BiteCard from "../BiteCard/BiteCard";
import { Container } from "react-bootstrap";

const hotData = [
  {
    title: "7 Yellowtail Reported",
    article:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi veniam amet obcaecati eligendi, repellendus impedit nihil optio, odit necessitatibus delectus in ipsum voluptate eum, nulla minima suscipit temporibus quisquam rem. Iure neque nam necessitatibus cumque recusandae nulla voluptate ut quod alias aut sint laborum optio reiciendis incidunt ex quam reprehenderit dicta, officia sapiente eveniet officiis illum dolor? Rem, deserunt repellendus",
  },
  {
    title: "Limits Reached",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit architecto, ut corporis quo expedita assumen aperiam dicta quis obcaecati numquam labore ipsum eveniet totam nobis soluta. Quae sunt nisi sequi?",
  },
];

function HotBites() {
  const [hotBites, setHotBites] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch hot bites data
    const fetchHotBites = () => {
      // Simulating a delay with setTimeout
      setTimeout(() => {
        setHotBites(hotData);
      }, 1000);
    };

    fetchHotBites();
  }, []);
  return (
    <>
      <Container style={{ display: "flex", flexDirection: "column" }}>
        {hotBites.map((bite, index) => (
          <BiteCard key={index} title={bite.title} article={bite.article} />
        ))}
      </Container>
    </>
  );
}

export default HotBites;
