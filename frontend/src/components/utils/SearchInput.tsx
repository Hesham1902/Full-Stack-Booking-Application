import { useState } from "react";
import SearchModal from "./SearchModal";

const SearchInput = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleClick = () => {
    setShowSearchBox(true);
  };
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="w-80 py-2.5 ps-10 text-sm text-gray-900 rounded-full bg-[#F7F8FA] outline-none focus:border focus:border-gray-400"
          placeholder="Search for a service or venue"
          onFocus={handleClick}
        />
      </div>
      <SearchModal
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
    </>
  );
};

export default SearchInput;
