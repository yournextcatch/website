import { useParams } from "react-router-dom";

const capitalizeWords = (str) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

function DestinationPage() {
  const { destinationName } = useParams();
  const formattedName = capitalizeWords(destinationName);

  return (
    <div>
      <h1>{formattedName}</h1>
      {/* You can now fetch data or render specific content based on destinationName */}
    </div>
  );
}

export default DestinationPage;
