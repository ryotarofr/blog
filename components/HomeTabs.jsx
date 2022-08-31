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

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-checks"
  width="44"
  height="44"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="#2c3e50"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 12l5 5l10 -10" />
  <path d="M2 12l5 5m5 -5l5 -5" />
</svg>;
