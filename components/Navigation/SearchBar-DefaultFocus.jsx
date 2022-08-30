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
      <div ref={focusTrapRef} className="text-center">
        <input
          size={65}
          data-autofocus
          onClick={handleClick}
          className="px-2 py-1 order-solid border-2 rounded-lg border-slate-300"
          placeholder="キーワードを入力"
        />
      </div>
    </>
  );
};
