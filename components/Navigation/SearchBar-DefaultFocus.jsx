import { useFocusTrap } from "@mantine/hooks";
import { useCloseSearchButtonContext } from "../../context/CloseButtonContext";

export const SeachBarDefaultFocus = () => {
  const [, setSearchOpened] = useCloseSearchButtonContext();
  const focusTrapRef = useFocusTrap();
  const handleClick = () => {
    setSearchOpened((prev) => !prev);
  };
  return (
    <>
      <div ref={focusTrapRef}>
        <input
          data-autofocus
          onClick={handleClick}
          className="px-2 order-solid border-2 rounded-lg border-slate-300"
          placeholder="キーワードを入力"
        />
      </div>
    </>
  );
};
