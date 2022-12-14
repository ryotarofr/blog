/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          content
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
      nextToken
    }
  }
`;
