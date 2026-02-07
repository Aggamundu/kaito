import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import ChevronLeftIcon from "../assets/icons/chevron-left.svg";
import ChevronRightIcon from "../assets/icons/chevron-right.svg";
import IllustrationCard from "../components/IllustrationCard";
import { illustrations } from "../data/illustrations";

export default function IllustrationViewer() {
  const { index } = useParams();
  const navigate = useNavigate();
  const i = Math.max(0,Math.min(Number(index) || 0,illustrations.length - 1));
  const item = illustrations[i];
  const [modalOpen,setModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      document.addEventListener("keydown",handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown",handleEscape);
      document.body.style.overflow = "";
    };
  },[modalOpen]);

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
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center pt-4 pb-4" id="illustration-viewer-title">
        <span className="text-[40px] max-w-[800px] text-center">{item.name}</span>
        <span className="text-lightgray text-center">{item.year}</span>
      </div>
      <div className="w-[40%] pb-4">
        <div className="w-full flex flex-col items-center">

          <div className="flex-1 flex flex-col items-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="cursor-zoom-in border-0 p-0 bg-transparent"
              aria-label="View full size"
            >
              <img
                src={item.image}
                alt={item.name}
                className="max-w-full w-auto h-auto object-contain min-w-[350px]"
              />
            </button>
            <div className="flex sm:hidden  px-6 py-3 items-center gap-2">
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
            
          </div>
        </div>
      </div>
      {/* Vertical center aligned with title block (pt-4 + ~40px text + year + pb-4 ≈ 3.5rem from top) */}
      <div className="hidden sm:flex fixed right-0 top-[8.25rem] -translate-y-1/2 px-6 py-3 items-center gap-2">
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
      {/* Image modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image full size view"
        >
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="hover:cursor-pointer absolute w-10 h-10 top-4 right-4 z-10 rounded-full p-2 text-white/80 hover:bg-white/20 hover:text-white transition"
            aria-label="Close"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>
          <div
            className="relative flex items-center justify-center max-w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}

      <div className="columns-2 sm:columns-3 lg:columns-4 gap-0 [&>*]:mb-0">
        {illustrations.map((item,index) => (
          <IllustrationCard
            key={item.name}
            image={item.image}
            name={item.name}
            year={item.year}
            onClick={() => {
              window.scrollTo({ top: 0,left: 0,behavior: 'smooth' });
              navigate(`/illustration/${index}`);
            }}
          />
        ))}
      </div>

    </div>
  );
}
