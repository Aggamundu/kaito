import { useNavigate } from "react-router-dom";
import CoverCard from "../components/CoverCard";
import { covers } from "../data/covers";

export default function Covers() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {covers.map((item,index) => (
          <CoverCard
            key={item.name || item.image}
            image={item.image}
            name={item.name}
            onClick={() => navigate(`/covers/${index}`)}
          />
        ))}
      </div>
    </div>
  );
}
