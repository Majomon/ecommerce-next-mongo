import axios from "axios";
import { useEffect, useState } from "react";

const SearchBar = ({ setDataProducts }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const fetchSearchData = async (search) => {
    const { data } = await axios.get(`/api/products?search=${search}`);
    setDataProducts(data);
  };

  useEffect(() => {
    fetchSearchData(searchQuery);
  }, [searchQuery]);

  return (
    <div className="w-1/3 relative flex items-center">
      <div className="absolute right-2 hidden sm:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="w-6 h-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <div className="w-full relative group">
        <input
          className="w-full bg-transparent border outline-none focus:border-yellow-400 rounded-xl py-2 px-3 placeholder:text-white placeholder:text-sm sm:placeholder:text-base"
          type="text"
          id="search"
          required
          onChange={handleSearchChange}
        />
        <label
          for="search"
          className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm sm:text-base group-focus-within:text-sm group-focus-within:py-4 peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          Burger Me Up!
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
