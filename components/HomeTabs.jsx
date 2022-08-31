import { Tabs } from "@mantine/core";
import { IconChecks, IconMessageCircle } from "@tabler/icons";

export const HomeTabs = () => {
  return (
    <div className="w-7/12 pt-8 pl-3">
      <div className=" shadow-lg border-solid border-2 rounded-md">
        <Tabs color="violet" radius="md" defaultValue="新着順">
          <Tabs.List>
            <Tabs.Tab value="新着順" icon={<IconChecks size={14} />}>
              新着順
            </Tabs.Tab>
            <Tabs.Tab value="人気順" icon={<IconMessageCircle size={14} />}>
              人気順
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
    </div>
  );
};
