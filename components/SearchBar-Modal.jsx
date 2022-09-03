import { Modal, Group, CloseButton, useMantineTheme } from "@mantine/core";

import { useCloseSearchButtonContext } from "../context/CloseButtonContext";
import { SeachBarDefaultFocus } from "./SearchBar-DefaultFocus";
import { SearchBarSelectButton } from "./SearchBar-SelectButton";

export const SearchBarModal = () => {
  const [seachOpened, setSearchOpened] = useCloseSearchButtonContext();
  const theme = useMantineTheme();
  const handleClick = () => {
    setSearchOpened((prev) => !prev);
  };

  return (
    <>
      <Modal
        opened={seachOpened}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="lg"
        onClose={handleClick}
        withCloseButton={false}
      >
        {/* Modal Contents */}
        <Group position="center">
          <div className="italic">CLOSE</div>

          <CloseButton
            title="Close popover"
            size="xl"
            iconSize={30}
            onClick={handleClick}
          />
        </Group>
        {/* SearchBar Inner */}

        <div className="font-semibold px-2 py-2">キーワード</div>
        <SeachBarDefaultFocus />
        <div className="font-semibold pt-6 px-2 py-2">カテゴリー</div>
        <SearchBarSelectButton />

        <br />
        <br />
      </Modal>
    </>
  );
};
