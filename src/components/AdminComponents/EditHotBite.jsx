// src/pages/EditHotBite.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as HotBitesApi from "../../utilities/api/HotBitesApi";

function EditHotBite() {
  const { id } = useParams();
  const [bite, setBite] = useState(null);

  useEffect(() => {
    async function fetchBite() {
      const data = await HotBitesApi.updateBite(id);
      setBite(data);
    }
    fetchBite();
  }, [id]);

  if (!bite) return <div>Loading Hot Bite...</div>;

  return (
    <div>
      <h2>Edit Hot Bite: {bite.title}</h2>
      {/* Add your form here to edit and submit updates */}
    </div>
  );
}

export default EditHotBite;
