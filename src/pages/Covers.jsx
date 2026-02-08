import { useNavigate } from "react-router-dom";
import CoverCard from "../components/CoverCard";
import { covers } from "../data/covers";

export default function Covers() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[150vh]">
      <div className="columns-2 sm:columns-3 gap-0 [&>*]:mb-0">
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
