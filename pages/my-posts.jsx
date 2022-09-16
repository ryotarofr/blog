import { withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { createBlog } from "../src/graphql/mutations";

const initialState = { name: "" };

function MyPost() {
  const [post, setPost] = useState(initialState);

  const { name } = post;

  function onChange(e) {
    setPost(() => ({
      ...post,
      [e.target.name]: e.target.value,
    }));
  }

  async function createNewPost() {
    if (!name) return;
    const id = uuid();
    post.id = id;

    await API.graphql({
      query: createBlog,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    // router.push(`/posts/${id}`);
  }

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold tracking-wide pt-10 pb-2">
          Create New Post
        </h1>
      </div>
      <div className="flex justify-center">
        <input
          onChange={onChange}
          name="name"
          placeholder="Name"
          value={name}
          className="mb-4 border"
        />
        <button
          type="button"
          onClick={createNewPost}
          className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        >
          Create Post
        </button>
      </div>
      <div className="grid place-items-center">
        <Test />
      </div>
    </div>
  );
}

export default withAuthenticator(MyPost);

import { useEffect } from "react";

import { listBlogs } from "../src/graphql/queries";

function Test() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [posts]);

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
      {posts.map((post, index) => (
        <div key={index}>{post.name}</div>
      ))}
    </>
  );
}
