import { useFocusTrap } from "@mantine/hooks";
import { TextInput } from "@mantine/core";

import { useCloseSearchButtonContext } from "../context/CloseButtonContext";
import { useMediaQueryContext } from "../context/MediaQueryContext";

export const SeachBarDefaultFocus = () => {
  const [, setSearchOpened] = useCloseSearchButtonContext();
  const focusTrapRef = useFocusTrap();
  const handleClick = () => {
    setSearchOpened((prev) => !prev);
  };
  // メディアクエリ
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();
  return (
    <>
      {isMobileSite && (
        <div ref={focusTrapRef} className="text-center">
          <TextInput
            data-autofocus
            onClick={handleClick}
            placeholder="キーワードを入力"
          />
        </div>
      )}
      {isPcSite && (
        <div ref={focusTrapRef} className="text-center">
          <TextInput
            data-autofocus
            onClick={handleClick}
            placeholder="キーワードを入力"
          />
        </div>
      )}
    </>
  );
};
