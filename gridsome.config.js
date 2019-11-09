// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome Ghost Starter",
  siteDescription:
    "A simple, hackable & minimalistic starter for Gridsome that uses Ghost's Content API for content.",

  templates: {
    GhostPost: "/:slug",
    GhostTag: "/tag/:slug",
    GhostAuthor: "/author/:slug"
  },

  plugins: [
    {
      use: "@gridsome/source-ghost",
      options: {
        baseUrl: "http://localhost:2368",
        contentKey: "9da98dc02d324cba9c7f0c6099"
      }
    }
  ]
};
