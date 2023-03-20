import graphqlRequest from "./graphqlRequest";
export async function getAllPosts() {
    const query = {
        query: `query getAllPosts {
            posts {
              nodes {
                date
                slug
                title
                excerpt
                featuredImage {
                  node {
                    mediaDetails {
                      sizes {
                        width
                        height
                        sourceUrl
                      }
                    }
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                  }
                  pageInfo {
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    startCursor
                  }
                }
              }
            }
          }`
    };
    
    const resdata = await graphqlRequest(query);
    const allPosts = resdata.data.posts;
    return allPosts;
}
