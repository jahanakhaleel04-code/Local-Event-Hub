import React from "react";
import {
  Briefcase,
  UtensilsCrossed,
  Heart,
  Music,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setPrice,
  setLocation,
  setDate,
  resetFilters,
} from "../../features/FilterSlice";

export const Filters = () => {
  const dispatch = useDispatch();

  // Current filter values from Redux
  const { category, price, location, date } = useSelector(
    (state) => state.filters
  );

  const categories = [
    { name: "Business", icon: <Briefcase size={16} /> },
    { name: "Food & Drinks", icon: <UtensilsCrossed size={16} /> },
    { name: "Health", icon: <Heart size={16} /> },
    { name: "Music", icon: <Music size={16} /> },
  ];

  const locations = ["Calicut", "Kochi", "Trivandrum"];
  const dates = ["Today", "Tomorrow", "This Week", "This Month"];

  return (
    <div className="flex flex-row gap-4 md:flex-col p-4 md:gap-6">

      <h1 className="text-xl md:text-2xl font-bold text-gray-700">
        Filters
      </h1>

      {/* Category */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm md:text-lg font-semibold tracking-wider">
          Category
        </h2>

        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li
              key={cat.name}
              onClick={() => dispatch(setCategory(cat.name))}
              className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition ${
                category === cat.name
                  ? "bg-purple-100 text-purple-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm md:text-lg font-semibold tracking-wider">
          Price
        </h2>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            value="free"
            checked={price === "free"}
            onChange={() => dispatch(setPrice("free"))}
          />
          Free
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            value="paid"
            checked={price === "paid"}
            onChange={() => dispatch(setPrice("paid"))}
          />
          Paid
        </label>
      </div>

      {/* Location */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm md:text-lg font-semibold tracking-wider">
          Location
        </h2>

        {locations.map((loc) => (
          <label
            key={loc}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="location"
              value={loc}
              checked={location === loc}
              onChange={() => dispatch(setLocation(loc))}
            />
            {loc}
          </label>
        ))}
      </div>

      {/* Date */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm md:text-lg font-semibold tracking-wider">
          Date
        </h2>

        {dates.map((d) => (
          <label
            key={d}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="date"
              value={d}
              checked={date === d}
              onChange={() => dispatch(setDate(d))}
            />
            {d}
          </label>
        ))}
      </div>

      {/* Reset */}
      <button
        onClick={() => dispatch(resetFilters())}
        className="mt-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
      >
        Reset Filters
      </button>
    </div>
  );
};