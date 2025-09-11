import { useState, useEffect } from "react";

function Musician({
  name,
  email,
  instagram,
  phoneNum,
  instrument,
  handleSelectChange,
  selectedValues,
  id
}) {
  // const [status, setStatus] = useState("Pending");
  const handleStatus = e => {
    // console.log(name, status);
    // setStatus(e.target.value);
    handleSelectChange(e, id);
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

      <br />
      <div className="mb-6 w-1/2">
        <label htmlFor="status" className="mb-3 block text-gray-700">
          Status
        </label>
        <select
          type="status"
          id="status"
          value={selectedValues[id]}
          className="bg-white rounded-full border border-gray-200 p-3 focus:outline:none w-full"
          placeholder="Please select an status"
          onChange={handleStatus}
          defaultValue="placeholder"
          required
        >
          {" "}
          <option value="placeholder">Please select a status</option>
          <option value="Playing">Playing</option>
          <option value="Up Next">Pending</option>
          <option value="Played">Played</option>
        </select>{" "}
      </div>
    </div>
  );
}

export default Musician;
