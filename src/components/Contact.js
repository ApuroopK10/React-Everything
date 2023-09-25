import React from "react";

const Contact = () => {
  return (
    <div className="text-red-700">
      <h1 className="text-red-700 font-bold p-4 m-4">Contact us</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 rounded-lg bg-red-700 text-white font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
