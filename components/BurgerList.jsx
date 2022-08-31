import { Burger, CloseButton, Drawer, Group } from "@mantine/core";
import { useCloseBurgerButtonContext } from "../context/CloseButtonContext";

export const BurgerList = () => {
  const [buegerOpened, setBurgerOpened] = useCloseBurgerButtonContext();
  const handleClick = () => {
    setBurgerOpened((prev) => !prev);
  };

  return (
    <>
      <Burger opened={buegerOpened} onClick={handleClick} />

      <Drawer
        opened={buegerOpened}
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
