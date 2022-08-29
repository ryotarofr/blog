import { useRef, useState } from "react";

import { SearchBarModal } from "./SearchBar-Modal";

export const SearchBar = () => {
  const inputRef = useRef();
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* SearchBar */}
      <input
        onClick={() => setOpened(true)}
        ref={inputRef}
        className="px-2 order-solid border-2 rounded-lg border-slate-300"
        placeholder="Search"
      />
      {/* SearchBar Inner */}
      <SearchBarModal opened={opened} setOpened={setOpened} />
    </>
  );
};
