<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom"># {{ $page.tag.title }}</h1>

    <div class="posts">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($path: String!) {
  tag:ghostTag (path: $path) {
    title: name
    slug
    path
    belongsTo {
      edges {
        node {
          ...on GhostPost {
            title
            path
            date: published_at (format: "D. MMMM YYYY")
            description: excerpt
            coverImage: feature_image
            content: html
            slug
          }
        }
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

<style lang="scss">
</style>

