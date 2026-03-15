import React from "react";

interface Props {
  cover: string;
}

const VinylPlayer: React.FC<Props> = ({ cover }) => {
  return (
    <div className="relative flex items-center justify-center w-80 h-80 mx-auto">

      {/* Vinyl */}
      <div className="absolute w-72 h-72 rounded-full bg-black border border-gray-800 animate-spin-slow"></div>

      {/* Cover */}
      <img
        src={cover}
        className="relative w-56 h-56 object-cover rounded-full shadow-2xl"
      />

    </div>
  );
};

export default VinylPlayer;