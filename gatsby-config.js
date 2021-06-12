module.exports = {
  siteMetadata: {
    title: "Sitio de Bienes Raices en Gatsby",
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:
          "https://salty-river-77166.herokuapp.com" || "http://localhost:1337",
        queryLimit: 1000,
        contentTypes: ["propiedades", "paginas", "categorias"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
