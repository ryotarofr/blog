import { useRef } from "react";
import { useCloseSearchButtonContext } from "../../context/CloseButtonContext";

import { SearchBarModal } from "./SearchBar-Modal";

export const SearchBar = () => {
  const inputRef = useRef();
  const [, setSearchOpened] = useCloseSearchButtonContext();
  const handleClick = () => {
    setSearchOpened((prev) => !prev);
  };

  return (
    <>
      {/* SearchBar */}

      <svg
        className="absolute text-slate-400 pl-2 h-9 w-7"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <input
        onClick={handleClick}
        ref={inputRef}
        className="py-1 pr-2 pl-6 order-solid border-2 rounded-lg border-slate-300"
        placeholder="  Search"
      />
      {/* SearchBar Inner */}
      <SearchBarModal />
    </>
  );
};
