import { Kbd, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

import { useCloseSearchButtonContext } from "../context/CloseButtonContext";
import { SearchBarModal } from "./SearchBar-Modal";

export const SearchBar = () => {
  const [, setSearchOpened] = useCloseSearchButtonContext();
  const handleClick = () => {
    setSearchOpened((prev) => !prev);
  };

  const rightSection = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: "0 5px" }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <>
      {/* SearchBar */}
      <TextInput
        onClick={handleClick}
        placeholder="Search"
        icon={<IconSearch size={16} />}
        rightSectionWidth={90}
        rightSection={rightSection}
        styles={{ rightSection: { pointerEvents: "none" } }}
      />

      {/* SearchBar Inner */}
      <SearchBarModal />
    </>
  );
};
