/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($username: String) {
    onCreateBlog(username: $username) {
      id
      name
      posts {
        items {
          id
          title
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($username: String) {
    onUpdateBlog(username: $username) {
      id
      name
      posts {
        items {
          id
          title
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($username: String) {
    onDeleteBlog(username: $username) {
      id
      name
      posts {
        items {
          id
          title
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($username: String) {
    onCreatePost(username: $username) {
      id
      title
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($username: String) {
    onUpdatePost(username: $username) {
      id
      title
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($username: String) {
    onDeletePost(username: $username) {
      id
      title
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($username: String) {
    onCreateComment(username: $username) {
      id
      post {
        id
        title
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($username: String) {
    onUpdateComment(username: $username) {
      id
      post {
        id
        title
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($username: String) {
    onDeleteComment(username: $username) {
      id
      post {
        id
        title
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
