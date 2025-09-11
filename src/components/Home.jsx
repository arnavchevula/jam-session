import { useState, useEffect } from "react";
import axios from "axios";
import { Sortable } from "./Sortable";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [instrument, setInstrument] = useState("");
  const [musicians, setMusicians] = useState([]);
  const status = "Pending";
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, email, instagram, phoneNum, instrument);
    axios
      .post("http://localhost:3000/add-musician", {
        name,
        email,
        instagram,
        phoneNum,
        instrument,
        status
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleInstagram = e => {
    setInstagram(e.target.value);
  };
  const handlePhoneNum = e => {
    setPhoneNum(e.target.value);
  };
  const handleInstrument = e => {
    setInstrument(e.target.value);
  };
  return (
    <>
      <section className="mx-auto container">
        <div className="w-full mx-auto lg:w-1/2  px-2">
          <h1 className="text-bold text-5xl text-teal-600 mb-4 mt-4 text-center">
            Join The Jam Session
          </h1>
          <form
            action="#"
            className="bg-gray-100 shadow-sm rounded-md p-8"
            id="contact_form"
          >
            <div className="mb-6">
              <label htmlFor="name" className="mb-3 block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="bg-white rounded-full border border-gray-200 p-3 focus:outline-none w-full"
                placeholder="John Doe"
                onChange={handleName}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="mb-3 block text-gray-700">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                className="bg-white rounded-full border border-gray-200 p-3 focus:outline:none w-full"
                placeholder="john.doe@company.com"
                onChange={handleEmail}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="mb-3 block text-gray-700">
                Phone Number:
              </label>
              <input
                type="phone"
                id="phone"
                className="bg-white rounded-full border border-gray-200 p-3 focus:outline:none w-full"
                placeholder="732-112-9092"
                onChange={handlePhoneNum}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="instagram" className="mb-3 block text-gray-700">
                Instagram Handle
              </label>
              <input
                type="instagram"
                id="instagram"
                className="bg-white rounded-full border border-gray-200 p-3 focus:outline:none w-full"
                placeholder="@johnmayer"
                onChange={handleInstagram}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="instrument" className="mb-3 block text-gray-700">
                Instrument
              </label>
              <select
                type="instrument"
                id="instrument"
                className="bg-white rounded-full border border-gray-200 p-3 focus:outline:none w-full"
                placeholder="Please select an instrument"
                onChange={handleInstrument}
                defaultValue="placeholder"
                required
              >
                {" "}
                <option value="placeholder">Please select an instrument</option>
                <option value="guitar">Guitar</option>
                <option value="drums">Drums</option>
                <option value="bass">Bass</option>
                <option value="keys">Keys</option>
                <option value="vocals">Vocals</option>
                <option value="sax">Sax</option>
                <option value="trumpet">Trumpet</option>
                <option value="trombone">Trombone</option>
                <option value="aux">Aux Percussion</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="py-3 px-12 bg-teal-500 hover:bg-teal-600 mr-5 rounded-full text-white text-lg focus:outline-none w-full"
            >
              Join The Jam!
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
