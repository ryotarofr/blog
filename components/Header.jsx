import { NavBar } from "./NavBar";


export const Header = () => {
  
  return (
    <>
      <div className="flex justify-center pt-6 pb-4 text-2xl italic">
        Fujiiの技術ブログ　
        <p className="font-serif text-sm pt-3">Written by Ryotaro Fujii</p>
      </div>
      <NavBar />
    </>
  );
};
