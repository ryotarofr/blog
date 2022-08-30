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
      <input
        onClick={handleClick}
        ref={inputRef}
        className="px-2 order-solid border-2 rounded-lg border-slate-300"
        placeholder="Search"
      />
      {/* SearchBar Inner */}
      <SearchBarModal />
    </>
  );
};
