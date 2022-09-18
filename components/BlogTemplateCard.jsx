import { API } from "aws-amplify";
import Link from "next/link";
import { useEffect } from "react";
import { useBlogTemplateContext } from "../context/BlogTemplateContext";
import { listPosts } from "../src/graphql/queries";

export const BlogTemplateCard = () => {
  const [cards, setCards] = useBlogTemplateContext();

  useEffect(() => {
    fetchPosts();
  }, [cards]);

  async function fetchPosts() {
    const postData = await API.graphql({ query: listPosts });

    setCards(postData.data.listPosts.items);
  }

  return (
    <>
      <div>
        {cards.map((post, index) => (
          <Link key={index} href={`/posts/${post.id}`}>
            <div className="rounded-lg shadow-lg bg-white min-w-full my-10">
              {/* 更新日 */}
              <div className="flex justify-center font-serif text-slate-400">
                2022/xx/yy
              </div>

              <div key={index} className="text-center text-2xl text-slate-500">
                {/* 【タイトル】 タイトルを入力してください！ */}
                {post.title}
              </div>
              <img
                className="rounded-t-lg max-h-72 w-full"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />

              <div className="p-6">
                <p className="text-gray-700 text-base mb-4 text-center">
                  読者の興味をひく見出しを考える
                </p>
                <div className="flex justify-center">
                  <Link href={`/posts`}>
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-slate-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-100 hover:shadow-lg focus:bg-slate-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-200 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
