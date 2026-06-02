import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      title: "Seasonal Candles",
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Festival Collection",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Anniversary Candles",
      image:
        "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Birthday Candles",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Mood Therapy",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="min-h-screen bg-[#fdf8f3] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="uppercase font-semibold text-[#b8895f]"
            style={{ letterSpacing: "5px", fontSize: "0.85rem" }}
          >
            Our Categories
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#2f221c] mt-5">
            Explore Candle Collections
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="relative h-[450px] rounded-[30px] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-3xl font-bold leading-tight">{item.title}</h2>
                <Link to="/checkout">
                  <button className="mt-5 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                    Shop Collection
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
