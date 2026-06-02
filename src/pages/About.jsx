import { Link } from "react-router-dom";
import { FaBan, FaUndoAlt, FaHeadset } from "react-icons/fa";

function About() {
  return (
    <>
    
        <section className="bg-[#ffffff] py-24 mt-20">
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

          {/* FEATURES */}
          {/* <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#3d2b1f]">
                Natural Soy Wax
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Eco-friendly candles with a clean and long-lasting
                burn experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#3d2b1f]">
                Luxury Fragrances
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Premium scents crafted to create warmth and
                relaxation.
              </p>
            </div>
          </div> */}

          {/* BUTTON */}
          <Link to="/categories">
            <button className="mt-6 bg-[#3d2b1f] hover:bg-[#5c4033] transition text-white px-10 py-4 rounded-full text-lg font-semibold">
              Explore Collection
            </button>
          </Link>

        </div>
      </div>
    </section>

       <section className="py-20 bg-[#fdf8f3]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">


      <h2 className="text-4xl font-bold text-[#2f221c] mb-4">
        Our Policies
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        We strive to provide a smooth shopping experience with clear policies
        and dedicated support for every customer.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* No Exchange */}
      <div className="bg-white rounded-[24px] border border-[#eee3d8] p-8 text-center hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f7ede4] flex items-center justify-center text-[#c68b59] text-2xl">
          <FaBan />
        </div>

        <h3 className="text-xl font-bold text-[#2f221c] mb-3">
          No Exchange
        </h3>

        <p className="text-gray-600 leading-7">
          Please note that exchanges are not available once an order has been placed.
        </p>
      </div>

      {/* No Returns */}
      <div className="bg-white rounded-[24px] border border-[#eee3d8] p-8 text-center hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f7ede4] flex items-center justify-center text-[#c68b59] text-2xl">
          <FaUndoAlt />
        </div>

        <h3 className="text-xl font-bold text-[#2f221c] mb-3">
          No Return Policy
        </h3>

        <p className="text-gray-600 leading-7">
          All sales are final. Returns are not accepted after purchase.
        </p>
      </div>

      {/* Support */}
      <div className="bg-white rounded-[24px] border border-[#eee3d8] p-8 text-center hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f7ede4] flex items-center justify-center text-[#c68b59] text-2xl">
          <FaHeadset />
        </div>

        <h3 className="text-xl font-bold text-[#2f221c] mb-3">
          Best Customer Support
        </h3>

        <p className="text-gray-600 leading-7">
          Our support team is available 24/7 to assist you with any questions or concerns.
        </p>
      </div>

    </div>
  </div>
</section>

    </>


  );
}

export default About;