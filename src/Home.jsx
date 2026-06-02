import Banner from "./pages/Banner";
import About from "./pages/About";
import Features from "./components/FeaturedCollection";
import { FaTruck, FaLeaf, FaStar, FaGift } from "react-icons/fa";
import './App.css'
import { Link } from "react-router-dom";

const features = [
  { icon: FaTruck, title: "Free Shipping", desc: "On all orders over ₹1500" },
  { icon: FaLeaf, title: "Natural Wax", desc: "100% coconut & soy blend" },
  { icon: FaStar, title: "Grasse Scents", desc: "Crafted in France's perfume capital" },
  { icon: FaGift, title: "Gift Ready", desc: "Beautiful packaging included" },
];

function Home() {
  return (
    <div className="App">
      <Banner />
       <section className="bg-[#ffffff] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE SECTION */}
        <div className="relative">
          <img
            src="https://houseofaroma.in/wp-content/uploads/2023/10/GERANIUM-YLANG-1.webp"
            alt="Scented Candles"
            className="rounded-[40px] shadow-2xl w-full h-[650px] object-cover"
          />

          {/* SMALL CARD */}
          <div className="absolute -bottom-7 -right-7 bg-white p-8 rounded-3xl shadow-2xl max-w-xs">
            <h3 className="text-4xl font-bold text-[#c68b59]">
              10k+
            </h3>

            <p className="mt-2 text-gray-600">
              Happy customers enjoying our premium fragrance
              collections worldwide.
            </p>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div>
          <p className="uppercase tracking-[5px] text-[#c68b59] font-semibold mb-4">
            About CandleLux
          </p>

          <h2 className="text-5xl md:text-6l font-bold text-[#3d2b1f] leading-tight">
            Crafted To Bring Warmth & Luxury
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-9">
            At CandleLux, we believe fragrance has the power to
            transform spaces and emotions. Our handcrafted scented
            candles are made with natural soy wax, premium oils,
            and elegant designs that create a calming atmosphere
            in every home.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-9">
            From floral and fruity aromas to woody and spa-inspired
            collections, each candle is carefully created to bring
            comfort, relaxation, and timeless elegance to your
            lifestyle.
          </p>

          {/* BUTTON */}
          <Link to="/categories">
            <button className="mt-6 bg-[#3d2b1f] hover:bg-[#5c4033] transition text-white px-10 py-4 rounded-full text-lg font-semibold">
              Explore Collection
            </button>
          </Link>

        </div>
      </div>
    </section>
      <Features />
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-amber-200/20">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-neutral-50 flex flex-col items-center text-center p-8 hover:bg-neutral-50 transition-colors">
              <div className="w-16 h-16 rounded-full border border-[#c68b59]/40 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#c68b59]/15">
                <Icon className="text-[#c68b59] text-[28px]" />
              </div>
              <p className="text-lg font-medium text-neutral-800 mb-1.5">{title}</p>
              <p className="text-md text-neutral-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
