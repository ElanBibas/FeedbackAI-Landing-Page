import React from "react";

interface BannerProps {
  imageUrl: string;
  text: string;
  linkUrl: string;
  linkText: string;
}

const Banner = ({ imageUrl, text, linkUrl, linkText }: BannerProps) => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full flex justify-between items-center bg-black p-1">
      <div>
        <img
          src={imageUrl}
          alt="Banner"
          className="w-14 h-auto mr-5 ml-2 border-8 border-transparent"
        />
      </div>
      <div className="flex-grow text-white text-sm mr-5">{text}</div>
      <div className="mr-2">
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 text-white rounded text-sm bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Banner;
