import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const inputClass =
    "w-full border border-[#e8d5c0] rounded-xl px-4 py-3 text-sm text-[#3d2b1f] bg-white focus:outline-none focus:ring-2 focus:ring-[#c68b59]/40";

  return (
    <div className="min-h-screen bg-[#fdf8f3] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="uppercase font-semibold text-[#b8895f] mb-3 bg-white inline-block px-5 py-2 rounded-full"
            style={{ letterSpacing: "5px", fontSize: "14px" }}
          >
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2f221c] mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto leading-7">
            We'd love to hear from you. Whether you have a question about our
            candles, orders, gifting options, or anything else, our team is
            ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="bg-white rounded-[24px] border border-[#eee3d8] p-8">
              <h2 className="text-2xl font-bold text-[#2f221c] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f7ede4] flex items-center justify-center text-[#c68b59]">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2f221c]">
                      Email Address
                    </h4>
                    <p className="text-gray-600">
                      somascents5@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f7ede4] flex items-center justify-center text-[#c68b59]">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2f221c]">
                      Phone Number
                    </h4>
                    <p className="text-gray-600">
                      +91 7416778158
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f7ede4] flex items-center justify-center text-[#c68b59]">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2f221c]">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      Mehdipatnam, Hyderabad
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-[24px] border border-[#eee3d8] overflow-hidden">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Mehdipatnam%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px]"
                loading="lazy"
              />
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[24px] border border-[#eee3d8] p-8">
            <h2 className="text-2xl font-bold text-[#2f221c] mb-8">
              Send a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2f221c] hover:bg-[#c68b59] transition text-white py-4 rounded-full font-semibold"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;