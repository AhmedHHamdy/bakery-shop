'use client'

import { useState } from "react";
import { LuSearch , LuFilter , LuShoppingCart } from "react-icons/lu";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const colors = {
    "Pink_Passion": "#F27EB4",
    "Sky_Whisper": "#91E0F2",
    "Lemon_Zest": "#F2EB8D",
    "Golden_Honey": "#F2C879",
    "Coral_Sunset": "#F2856D"
  };


  const mockProducts = [
    { id: 1, name: "Vanilla Cupcake", price: 3.99, category: "regular", image: "bg-main-cupcake-one" },
    { id: 2, name: "Chocolate Cupcake", price: 3.99, category: "regular", image: "bg-main-cupcake-two" },
    { id: 3, name: "Red Velvet Cupcake", price: 4.99, category: "regular", image: "bg-main-cupcake-three" },
    { id: 4, name: "Birthday Cake", price: 5.99, category: "special", image: "bg-main-cupcake-four" },
    { id: 5, name: "Strawberry Delight", price: 4.99, category: "regular", image: "bg-main-cupcake-six" },
    { id: 6, name: "Lemon Surprise", price: 4.49, category: "regular", image: "bg-main-cupcake-seven" },
    { id: 7, name: "Mint Chocolate", price: 5.49, category: "special", image: "bg-main-cupcake-eight" },
    { id: 8, name: "Oreo Crumble", price: 4.99, category: "regular", image: "bg-main-cupcake-nine" },
    { id: 9, name: "Wedding Special", price: 6.99, category: "special", image: "bg-main-cupcake-one" },
  ];
 
  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || product.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-36 bg-Sky_Whisper border-8 border-b-0">
      <div className="relative mb-12 rounded-2xl overflow-hidden">
        <div className="bg-main-cupcake-nine h-64 bg-cover bg-center rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-Pink_Passion/80 to-Sky_Whisper/70 rounded-2xl"></div>
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Delicious Cupcakes</h1>
              <p className="text-white text-xl mb-6 max-w-lg">Explore our selection of handcrafted treats made fresh daily.</p>
              <button style={{ backgroundColor: colors.Golden_Honey }} className="px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center text-white">
                <LuShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 flex flex-col sm:flex-row items-center justify-between ">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search cupcakes..."
              className="w-full pl-10 pr-4 py-2 border-2 rounded-lg focus:ring-2 focus:border-transparent"
              style={{ boxShadow: `0 0 0 1px ${colors.Sky_Whisper}` }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <LuSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="flex items-center text-gray-700 mr-2">
            <LuFilter className="h-5 w-5 mr-1" />
            <span className="font-medium">Filter:</span>
          </div>
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === "all" ? "text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            style={{ backgroundColor: activeFilter === "all" ? colors.Coral_Sunset : "" }}
          >
            Show All
          </button>
          <button
            onClick={() => setActiveFilter("regular")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === "regular" ? "text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            style={{ backgroundColor: activeFilter === "regular" ? colors.Coral_Sunset : "" }}
          >
            Regular
          </button>
          <button
            onClick={() => setActiveFilter("special")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === "special" ? "text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            style={{ backgroundColor: activeFilter === "special" ? colors.Coral_Sunset : "" }}
          >
            Specials
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl bg-Golden_Honey border-4">
            <div className={`relative h-64 w-full overflow-hidden ${product.image} bg-cover bg-center`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center">
                <button className="px-4 py-2 mb-4 rounded-full font-medium transition transform translate-y-4 group-hover:translate-y-0 text-white"
                  style={{ backgroundColor: colors.Pink_Passion }}>
                  Add to Cart
                </button>
              </div>
              {product.category === "special" && (
                <div className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: colors.Golden_Honey }}>
                  Special
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold" >${product.price}</span>
                <div className="flex items-center">
                  <div className="flex" style={{ color: colors.Golden_Honey }}>
                    {Array(5).fill(2).map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">(5.0)</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium">No cupcakes match your search</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}