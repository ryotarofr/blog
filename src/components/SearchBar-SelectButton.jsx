import { NativeSelect } from "@mantine/core";

export const SearchBarSelectButton = () => {
  return (
    <NativeSelect data={["React", "Vue", "Angular", "Svelte"]} radius="md" />
  );
};
