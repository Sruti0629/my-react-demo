import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo-scents-w.png";

function Footer() {
  return (
    <footer className="bg-[#241813] text-white pt-24 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14 border-b border-white/10 pb-16">

          {/* BRAND */}
          <div>
            <img src={logo} alt="soma scents" className="w-32 mb-6" />
            <p className="mt-6 text-gray-400 leading-8">
              Premium handcrafted scented candles designed to
              create warmth, comfort, and luxury in every space.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Quick Links</h3>
            <ul className="space-y-5 text-gray-400">
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/categories">Shop</Link>
              </li>
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/categories">Collections</Link>
              </li>
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/checkout">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COLLECTIONS */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Collections</h3>
            <ul className="space-y-5 text-gray-400">
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/categories">Seasonal Candles</Link>
              </li>
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/categories">Festival Collection</Link>
              </li>
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/categories">Anniversary Gifts</Link>
              </li>
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/categories">Birthday Specials</Link>
              </li>
              <li className="hover:text-[#d4a373] transition cursor-pointer">
                <Link to="/categories">Mood Therapy</Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Join Us</h3>
            <div className="flex gap-4 mt-8">
              {[FaInstagram, FaFacebookF, FaPinterestP, FaTwitter].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#d4a373] hover:border-[#d4a373] transition cursor-pointer"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 text-gray-500 text-sm">
          <p>© 2026 CandleLux. All Rights Reserved.</p>
          <div className="flex gap-8">
            <p className="hover:text-[#d4a373] transition cursor-pointer">Privacy Policy</p>
            <p className="hover:text-[#d4a373] transition cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-[#d4a373] transition cursor-pointer">Shipping Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
