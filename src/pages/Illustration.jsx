import { useNavigate } from "react-router-dom";
import IllustrationCard from "../components/IllustrationCard";
import { illustrations } from "../data/illustrations";

export default function Illustration() {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <div className="w-full h-[300px] bg-red-500">Banner here</div>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-0 [&>*]:mb-0">
        {illustrations.map((item,index) => (
          <IllustrationCard
            key={item.name}
            image={item.image}
            name={item.name}
            year={item.year}
            onClick={() => navigate(`/illustration/${index}`)}
          />
        ))}
      </div>
    </div>
  );
}
