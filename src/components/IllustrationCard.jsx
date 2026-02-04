import React from "react";

export default function IllustrationCard({ image,name,year,onClick }) {
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      className="relative overflow-hidden cursor-pointer group w-full break-inside-avoid"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-auto block transition duration-300 ease-in-out group-hover:brightness-50"
      />
      <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 text-center w-[90%] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-[24px] mb-1">{name}</div>
        <div className="text-white text-[12px]">{year}</div>
      </div>
    </div>
  );
}