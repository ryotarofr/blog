import { API } from "aws-amplify";
import { useEffect } from "react";
import { SideMenuLayout } from "../../components/sideMenu/SideMenuLayout";
import { getPost, listPosts } from "../../src/graphql/queries";

export default function Posts({ post }) {
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const postData = await API.graphql({ query: getPost });
    setCards(postData.data.getPost);
  }

  return (
    <>
      <div className="bg-gray-50">
        <div className="w-11/12 flex justify-between p-10 m-auto">
          <div className="w-7/12">
            <h1 className="flex justify-center text-4xl text-gray-500">
              {post.title}
            </h1>
            <div>{post.content}</div>
          </div>

          <div className="w-4/12">
            <SideMenuLayout />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const postData = await API.graphql({
    query: listPosts,
  });
  const paths = postData.data.listPosts.items.map((post) => ({
    params: {
      id: post.id,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const postData = await API.graphql({
    query: getPost,
    variables: { id },
  });
  return {
    props: {
      post: postData.data.getPost,
    },
    revalidate: 1,
  };
}
