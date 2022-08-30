import { useFocusTrap } from "@mantine/hooks";

export const SeachBarDefaultFocus = ({ setOpened }) => {
  const focusTrapRef = useFocusTrap();
  return (
    <>
      <div ref={focusTrapRef}>
        <input
          data-autofocus
          onClick={() => setOpened(true)}
          className="px-2 order-solid border-2 rounded-lg border-slate-300"
          placeholder="キーワードを入力"
        />
      </div>
    </>
  );
};
