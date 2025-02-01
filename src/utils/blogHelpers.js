export const getRelatedPosts = (currentPost, allPosts, limit = 3) => {
    return allPosts
      .filter(post => 
        post.id !== currentPost.id && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .slice(0, limit);
  };
  
  export const getCategoryPosts = (category, allPosts) => {
    return allPosts.filter(post => post.category === category);
  };
  
  export const getPostBySlug = (slug, allPosts) => {
    return allPosts.find(post => post.slug === slug);
  };