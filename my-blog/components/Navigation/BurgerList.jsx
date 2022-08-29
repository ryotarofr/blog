import { useState } from "react";
import { Burger, CloseButton, Drawer, Group } from "@mantine/core";

export const BurgerList = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened((prev) => !prev);
  };
  return (
    <>
      <Burger opened={opened} onClick={handleClick} />

      <Drawer
        opened={opened}
        onClose={handleClick}
        position="right"
        // title="Register"
        padding="xl"
        size="md"
        withCloseButton={false}
      >
        <Group position="center">
          <div className="italic">CLOSE</div>

          <CloseButton
            title="Close popover"
            size="xl"
            iconSize={30}
            onClick={handleClick}
          />
        </Group>
      </Drawer>
    </>
  );
};
