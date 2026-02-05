import { useNavigate } from "react-router-dom";
import IllustrationCard from "../components/IllustrationCard";
import { bvlgari } from "../data/bvlgari";

export default function Bvlgari() {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {bvlgari.map((item,index) => (
          <IllustrationCard
            key={item.name || item.image}
            image={item.image}
            name={item.name}
            onClick={() => navigate(`/bvlgari/${index}`)}
          />
        ))}
      </div>
    </div>
  );
}
