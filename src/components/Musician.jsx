import { useState, useEffect } from "react";

function Musician({ name, email, instagram, phoneNum, instrument }) {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);

  const handleCheckbox = () => {
    setHasPlayed(hasPlayed => !hasPlayed);
  };

  const handleCurrentlyPlaying = () => {
    setCurrentlyPlaying(currentlyPlaying => !currentlyPlaying);
  };

  return (
    <div className="bg-gray-900 px-4 py-6 mt-2 mb-2">
      <div className="flex justify-between items-baseline capitalize">
        <h3 className="text-5xl text-gray-200">{name}</h3>
        <p className="text-gray-200">{instrument}</p>
      </div>
      <p className="text-gray-400">{email}</p>
      <p className="text-gray-400">{phoneNum}</p>
      <p className="text-gray-400">{instagram}</p>
      <label className="text-gray-200">
        <input
          type={"checkbox"}
          checked={hasPlayed}
          onChange={handleCheckbox}
          className="mr-1"
        />
        Played?
      </label>
      <br />
      <label className="text-gray-200">
        <input
          type={"checkbox"}
          checked={currentlyPlaying}
          onChange={handleCurrentlyPlaying}
          className="mr-1"
        />
        Currently Playing?
      </label>
    </div>
  );
}

export default Musician;
