export default function BlogTemplateCard() {
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white min-w-full">
          {/* 更新日 */}
          <div className="flex justify-center font-serif text-slate-400">
            2022/xx/yy
          </div>
          <a href="#!">
            <div className="text-center text-2xl text-slate-500">
              【タイトル】 タイトルを入力してください！
            </div>
            <img
              className="rounded-t-lg max-h-72 w-full"
              src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <p className="text-gray-700 text-base mb-4 text-center">
              読者の興味をひく見出しを考える
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-slate-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-100 hover:shadow-lg focus:bg-slate-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-200 active:shadow-lg transition duration-150 ease-in-out"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
