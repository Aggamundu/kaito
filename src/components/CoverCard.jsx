import React,{ useState } from "react";

export default function CoverCard({ image,name,onClick }) {
  const [loaded,setLoaded] = useState(false);
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      className="relative overflow-hidden cursor-pointer group w-full break-inside-avoid self-start"
    >
      <img
        src={image}
        alt={name || ""}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition duration-500 ease-out group-hover:brightness-50 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 text-center w-[90%] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

      </div>
    </div>
  );
}