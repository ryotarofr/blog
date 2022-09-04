import useMedia from "use-media";
import { useMemo, createContext, useContext } from "react";

// Contextの生成
// デフォルトはPCとする。
const MediaQueryContext = createContext({
  isMobileSite: false,
  isTabletSite: false,
  isPcSite: true,
});

// 各デバイスでのサイズを定義
const mediaQueries = {
  mobile: "(max-width: 519px)",
  tablet: "(min-width: 520px) and (max-width: 959px)",
  pc: "(min-width: 960px)",
};

export const MediaQueryProvider = ({ children }) => {
  const isMobileSite = useMedia(mediaQueries.mobile);
  const isTabletSite = useMedia(mediaQueries.tablet);
  const isPcSite = useMedia(mediaQueries.pc);
  const value = useMemo(
    () => ({ isMobileSite, isTabletSite, isPcSite }),
    [isMobileSite, isTabletSite, isPcSite]
  );

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = () => useContext(MediaQueryContext);
