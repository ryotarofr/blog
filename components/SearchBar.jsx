import { Kbd, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

import { useCloseSearchButtonContext } from "../context/CloseButtonContext";
import { useMediaQueryContext } from "../context/MediaQueryContext";
import { SearchBarModal } from "./SearchBar-Modal";

export const SearchBar = () => {
  const [, setSearchOpened] = useCloseSearchButtonContext();
  const handleClick = () => {
    setSearchOpened((prev) => !prev);
  };

  const rightSection = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: "0.5px" }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  // メディアクエリ
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();

  return (
    <>
      {/* モバイルサイト */}
      {/* SearchBar */}
      {isMobileSite && (
        <TextInput
          onClick={handleClick}
          placeholder="Search"
          icon={<IconSearch />}
          rightSectionWidth={90}
          styles={{ rightSection: { pointerEvents: "none" } }}
        />
      )}
      {/* PCサイト */}
      {/* SearchBar */}
      {isPcSite && (
        <TextInput
          onClick={handleClick}
          placeholder="Search"
          icon={<IconSearch />}
          rightSectionWidth={90}
          rightSection={rightSection}
          styles={{ rightSection: { pointerEvents: "none" } }}
        />
      )}

      {/* SearchBar Inner */}
      <SearchBarModal />
    </>
  );
};
