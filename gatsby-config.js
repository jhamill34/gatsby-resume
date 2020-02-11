require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Set your title here...`,
    description: `Description goes here...`,
    author: `Joshua Rasmussen`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_PERSONAL_BASEID,
            tableName: `Resume`,
            tableView: `Grid view`,
            tableLinks: ['education', 'experience', 'projects', 'skills'],
          },
          {
            baseId: process.env.AIRTABLE_PERSONAL_BASEID,
            tableName: `Education`,
            tableView: `Grid view`,
          },
          {
            baseId: process.env.AIRTABLE_PERSONAL_BASEID,
            tableName: `Experience`,
            tableView: `Grid view`,
            tableLinks: ['technologies'],
          },
          {
            baseId: process.env.AIRTABLE_PERSONAL_BASEID,
            tableName: `Projects`,
            tableView: `Grid view`,
            tableLinks: ['technologies'],
          },
          {
            baseId: process.env.AIRTABLE_PERSONAL_BASEID,
            tableName: `Skills`,
            tableView: `Grid view`,
          },
        ],
      },
    },
  ],
}
