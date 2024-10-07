import React from "react";

const ContactPAge = () => {
  return (
    <div id="contacts">
      <div>
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-100 ml-2 sm:ml-4">
            <iframe
              className="w-full h-64 sm:h-full sm:w-2/3"
              title="map"
              scrolling="yes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.483174307729!2d67.03909917520076!3d24.88149537791566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e59125bab47%3A0x2fb1e6c0a3b4b961!2sJamia%20Uloom%20Islamia%20Banuri%20Town%20b!5e0!3m2!1sen!2s!4v1727970776916!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="absolute top-10 left-4 z-10 bg-white bg-opacity-75 p-4 rounded shadow-md">
              <div className="bg-white bg-opacity-75 p-4 rounded">
                <p className="text-gray-800 font-medium">
                  Email: arfa@gmail.com
                </p>
                <p className="text-gray-800 font-medium">Phone: 0324-0000000</p>
              </div>
            </div>
          </div>
          <div className="container px-5 py-12 md:py-24 mx-auto flex flex-col md:flex-row">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact Me
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Fill the form below to get in touch with me.
              </p>
              <form action="https://formspree.io/f/xgvewzje" method="POST">
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="subject"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  ></textarea>
                </div>
                <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPAge;
