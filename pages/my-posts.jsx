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
      <h1 className="text-3xl font-semibold tracking-wide md-6">
        Create New Post
      </h1>
      <input onChange={onChange} name="name" placeholder="Name" value={name} />
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

export default withAuthenticator(MyPost);
