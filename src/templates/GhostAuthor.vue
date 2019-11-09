<template>
  <Layout>
    <g-image
      alt="Author image"
      class="author__image"
      v-if="$page.author.profile_image"
      :src="$page.author.profile_image"
    />
    <h1>{{ $page.author.name }}</h1>

    <div class="posts">
      <PostCard v-for="edge in $page.author.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query Author ($path: String!) {
  author:ghostAuthor (path: $path) {
    name
    path
    profile_image
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
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard
  }
};
</script>