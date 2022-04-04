import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-auto py-20 md:pb-0 md:h-screen px-3 bg-[#0a192f] flex flex-col justify-center items-center"
    >
      <form action="https://getform.io/f/6b00cd38-3e80-4644-a68b-1e67dc7c9de7" method="POST" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff1616] text-gray-300">
            Contact
          </p>
          <p className="font-mono my-3 text-gray-300">
            // Submit the form below or shoot me an email -
            meshaal.nasor10@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message .."
        ></textarea>
        <button className="text-white border-2 hover:bg-[#ff1616] hover:border-[#ff1616] px-4 py-3 my-8 mx-auto flex items-center duration-500">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
