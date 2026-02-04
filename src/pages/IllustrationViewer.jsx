import { useNavigate,useParams } from "react-router-dom";
import ChevronLeftIcon from "../assets/icons/chevron-left.svg";
import ChevronRightIcon from "../assets/icons/chevron-right.svg";
import { illustrations } from "../data/illustrations";

export default function IllustrationViewer() {
  const { index } = useParams();
  const navigate = useNavigate();
  const i = Math.max(0,Math.min(Number(index) || 0,illustrations.length - 1));
  const item = illustrations[i];

  const goPrev = () => {
    const prev = i === 0 ? illustrations.length - 1 : i - 1;
    navigate(`/illustration/${prev}`);
  };
  const goNext = () => {
    const next = i === illustrations.length - 1 ? 0 : i + 1;
    navigate(`/illustration/${next}`);
  };
  const backToGrid = () => navigate("/illustration");

  return (
    <div className="min-h-screen flex flex-col items-center p-4 gap-2">
      <span className="text-[40px] mx-4 max-w-[800px] text-center">{item.name}</span>

      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={goPrev}
          className="p-1 hover:cursor-pointer rounded-full bg-white/20 hover:opacity-50 transition"
          aria-label="Previous"
        >
          <img src={ChevronLeftIcon} alt="" className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="p-1 hover:cursor-pointer rounded-full bg-white/20 hover:opacity-50 transition"
          aria-label="Next"
        >
          <img src={ChevronRightIcon} alt="Next" className="w-6 h-6" />
        </button>
      </div>
      <div className="relative w-full max-w-4xl flex items-center justify-center gap-2">

        <div className="flex-1 flex flex-col items-center">
          <img
            src={item.image}
            alt={item.name}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
          />
          <p className="text-white mt-2 text-center">
            {item.name} {item.year && `(${item.year})`}
          </p>
        </div>

      </div>
      <button
        type="button"
        onClick={backToGrid}
        className="mt-4 text-lightgray hover:text-white transition"
      >
        Back to Illustration
      </button>
    </div>
  );
}
