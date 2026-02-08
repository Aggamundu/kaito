import Email from "../assets/icons/email.png";
import Instagram from "../assets/icons/instagram.png";
import TikTok from "../assets/icons/tik-tok.png";
import Twitter from "../assets/icons/twitter.png";

export default function icons() {
  return (
    <div className="flex flex-col items-center pt-4 gap-y-4">
      <button
        className="px-4 py-2 flex flex-row items-center justify-center gap-x-2 border border-black rounded-full w-[30%] min-w-[300px] hover:bg-black/30 duration-300 transition-all hover:cursor-pointer group"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 1)" }}
        onClick={() => window.open("https://www.instagram.com/kaito_xux/","_blank")}
        type="button"
      >
        <img src={Instagram} alt="Instagram" className="w-[20px] h-[20px]" />
        <span className="text-[12px] transition-colors duration-300  ">Instagram</span>
      </button>
      {/* <button
        className="px-4 py-2 flex flex-row items-center justify-center gap-x-2 border border-black rounded-full w-[30%] min-w-[300px] hover:bg-black/30 duration-300 transition-all hover:cursor-pointer group"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 1)" }}
        onClick={() => window.open("https://www.instagram.com/kaito_xux/", "_blank")}
        type="button"
      >
        <img src={Webtoon} alt="Webtoon" className="w-[20px] h-[20px]" />
        <span className="text-[12px] transition-colors duration-300  ">https://www.instagram.com/kaito_xux/</span>
      </button> */}
      <button
        className="px-4 py-2 flex flex-row items-center justify-center gap-x-2 border border-black rounded-full w-[30%] min-w-[300px] hover:bg-black/30 duration-300 transition-all hover:cursor-pointer group"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 1)" }}
        onClick={() => window.open("https://www.instagram.com/kaito_xux/","_blank")}
        type="button"
      >
        <img src={Email} alt="Email" className="w-[20px] h-[20px]" />
        <span className="text-[12px] transition-colors duration-300  ">Email</span>
      </button>
      <button
        className="px-4 py-2 flex flex-row items-center justify-center gap-x-2 border border-black rounded-full w-[30%] min-w-[300px] hover:bg-black/30 duration-300 transition-all hover:cursor-pointer group"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 1)" }}
        onClick={() => window.open("https://www.instagram.com/kaito_xux/","_blank")}
        type="button"
      >
        <img src={Twitter} alt="Twitter" className="w-[20px] h-[20px]" />
        <span className="text-[12px] transition-colors duration-300  ">Twitter</span>
      </button>
      <button
        className="px-4 py-2 flex flex-row items-center justify-center gap-x-2 border border-black rounded-full w-[30%] min-w-[300px] hover:bg-black/30 duration-300 transition-all hover:cursor-pointer group"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 1)" }}
        onClick={() => window.open("https://www.instagram.com/kaito_xux/","_blank")}
        type="button"
      >
        <img src={TikTok} alt="TikTok" className="w-[20px] h-[20px]" />
        <span className="text-[12px] transition-colors duration-300  ">TikTok</span>
      </button>
    </div>
  )
}
