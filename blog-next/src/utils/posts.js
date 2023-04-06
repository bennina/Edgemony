import { postsJson } from "@/pages/api/posts";

// return all posts
export function getAllPosts() {
  return postsJson[0];
}

//return all slugs
export function getAllSlugs() {
  let slugs = [];
  getAllPosts().map((p) => {
    slugs.push(`/blog/${p.slug}`);
  });

  return slugs;
}

//retun post data
export function getPostData(slug) {
  let post = null;
  getAllPosts().map((p) => {
    if (p.slug === slug) {
      post = p;
      return;
    }
  });
  return post;
}
