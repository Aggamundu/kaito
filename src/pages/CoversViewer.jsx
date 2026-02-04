import { useNavigate,useParams } from "react-router-dom";
import { covers } from "../data/covers";

export default function CoversViewer() {
  const { index } = useParams();
  const navigate = useNavigate();
  const i = Math.max(0,Math.min(Number(index) || 0,covers.length - 1));
  const item = covers[i];

  const goPrev = () => {
    if (i > 0) navigate(`/covers/${i - 1}`);
  };
  const goNext = () => {
    if (i < covers.length - 1) navigate(`/covers/${i + 1}`);
  };
  const backToGrid = () => navigate("/covers");

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-4xl flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={goPrev}
          disabled={i === 0}
          className="absolute left-0 z-10 p-2 rounded-full bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/30 transition"
          aria-label="Previous"
        >
          ←
        </button>
        <div className="flex-1 flex flex-col items-center">
          <img
            src={item.image}
            alt={item.name}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
          />
          {item.name && (
            <p className="text-white mt-2 text-center">{item.name}</p>
          )}
        </div>
        <button
          type="button"
          onClick={goNext}
          disabled={i === covers.length - 1}
          className="absolute right-0 z-10 p-2 rounded-full bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/30 transition"
          aria-label="Next"
        >
          →
        </button>
      </div>
      <button
        type="button"
        onClick={backToGrid}
        className="mt-4 text-lightgray hover:text-white transition"
      >
        Back to Covers
      </button>
    </div>
  );
}
