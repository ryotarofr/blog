import { Avatar } from "@mantine/core";

export const MyAvatar = () => {
  return (
    <Avatar
      radius="xl"
      size="lg"
      component="a"
      href="https://github.com/ryotarofr"
      target="_blank"
      src="https://pbs.twimg.com/media/DRdc9zhVwAQG21-.png"
      alt="プロフィール画像"
    />
  );
};
