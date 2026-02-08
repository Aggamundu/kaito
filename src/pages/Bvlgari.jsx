import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myGif from "../assets/bvlgari/output.gif";
import IllustrationCard from "../components/IllustrationCard";
import { bvlgari } from "../data/bvlgari";

export default function Bvlgari() {
  const navigate = useNavigate();
  const [gifLoaded,setGifLoaded] = useState(false);

  return (
    <div className="flex flex-col justify-start items-center min-h-[150vh]">
      <div className="flex flex-col items-center pt-4 pb-4">
        <span className="text-[40px] max-w-[800px] text-center">The Mystique of a Kiss</span>
        <span className="text-lightgray text-center">First Place Winner of Bulgari: The Art of Living with Allegra Baciami Passioné Contest</span>
      </div>
      <img
        src={myGif}
        alt="My GIF"
        onLoad={() => setGifLoaded(true)}
        className={`w-[40%] min-w-[320px] h-auto pb-4 transition duration-500 ease-out ${gifLoaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="columns-2 sm:columns-3 gap-0 [&>*]:mb-0">
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
