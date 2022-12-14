import { withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useRouter } from "next/router";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import { createPost } from "../src/graphql/mutations";

const initialState = { title: "", content: "" };
function CreatePost() {
  const [post, setPost] = useState(initialState);
  const router = useRouter();
  const { title, content } = post;

  function onChange(e) {
    setPost(() => ({
      ...post,
      [e.target.name]: e.target.value,
    }));
  }
  async function createNewPost() {
    if (!title || !content) return;
    const id = uuid();
    post.id = id;

    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    router.push(`/posts/${id}`);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide md-6">
        Create New Post
      </h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
      />
      <input
        onChange={onChange}
        name="content"
        placeholder="Content"
        value={post.content}
      />

      <button
        type="button"
        onClick={createNewPost}
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
      >
        Create Post
      </button>
    </div>
  );
}

export default withAuthenticator(CreatePost);
