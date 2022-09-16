import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { listBlogs } from "../src/graphql/queries";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const postData = await API.graphql({ query: listBlogs });
    const { items } = postData.data.listBlogs;
    const postTitle = await Promise.all(
      items.map(async (post) => {
        if (post.name) return post;
      })
    );

    setPosts(postTitle);
  }

  return (
    <>
      <Layout />
      {posts.map((post, index) => (
        <div key={index}>{post.name}</div>
      ))}
    </>
  );
}
