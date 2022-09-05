import { MyAvatar } from "./MyAvatar";

export const SideMenuLayout = () => {
  return (
    <>
      <section>
        <div className="bg-white shadow-lg py-8">
          <div className="flex justify-center">
            {/* <img
              className="w-fit max-h-20 pt-8 pb-4"
              src="https://pbs.twimg.com/media/DRdc9zhVwAQG21-.png"
              alt="プロフィール画像"
            /> */}
            <MyAvatar />
          </div>
          <div className="py-12 mx-8 text-center text-xl font-mono border-b-2 border-gray-300 ">
            藤井
          </div>
          <div className="py-6 px-6 text-center text-gray-400">
            本人はネコになりたいと思っていますﾐ･ω･｡ﾐ！
            ですので、気ままに新しい技術の開拓と情報発信をしていきます。
            暖かい目で見守ってください。🐈　
            現在は、Reactをベースにプログラミングを学んでいます!!
            このブログサイトもReact製です!
          </div>
        </div>
      </section>
      <br />
      <br />
      <section>
        <div className="bg-white shadow-lg">
          <div className="py-12 mx-8 text-center text-xl font-mono border-b-2 border-gray-300 ">
            Archive
          </div>
          <div className="py-6 px-6 text-center text-gray-400">
            2022年9月（投稿数）
          </div>
        </div>
      </section>
    </>
  );
};
