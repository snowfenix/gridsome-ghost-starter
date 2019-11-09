<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allGhostPost(sortBy: "published_at", order: DESC) {
    edges {
      node {
        id
        title
        description: excerpt
        date: published_at(format: "D. MMMM YYYY")
        path: slug
        cover_image: feature_image
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
