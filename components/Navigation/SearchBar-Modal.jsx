import { Modal, Group, CloseButton, useMantineTheme } from "@mantine/core";

import { SeachBarDefaultFocus } from "./SearchBar-DefaultFocus";

export const SearchBarModal = ({ opened, setOpened }) => {
  const theme = useMantineTheme();
  const handleClick = () => {
    setOpened((prev) => !prev);
  };
  return (
    <>
      <Modal
        opened={opened}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="lg"
        onClose={() => setOpened(false)}
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
        <SeachBarDefaultFocus setOpened={setOpened} />
      </Modal>
    </>
  );
};
