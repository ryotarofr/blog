/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          content
          createdAt
          updatedAt
          blogPostsId
          username
        }
        nextToken
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          content
          createdAt
          updatedAt
          blogPostsId
          username
        }
        nextToken
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          content
          createdAt
          updatedAt
          blogPostsId
          username
        }
        nextToken
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          username
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
      username
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          username
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
      username
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          username
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
      username
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        content
        blog {
          id
          name
          createdAt
          updatedAt
          username
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
        username
      }
      content
      createdAt
      updatedAt
      postCommentsId
      username
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        content
        blog {
          id
          name
          createdAt
          updatedAt
          username
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
        username
      }
      content
      createdAt
      updatedAt
      postCommentsId
      username
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        content
        blog {
          id
          name
          createdAt
          updatedAt
          username
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
        username
      }
      content
      createdAt
      updatedAt
      postCommentsId
      username
    }
  }
`;
