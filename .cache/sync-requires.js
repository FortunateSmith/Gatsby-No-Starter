
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Liam/coding/Gatsby/gatsby-portolio-2023/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Liam/coding/Gatsby/gatsby-portolio-2023/src/pages/index.js")),
  "component---src-templates-generic-js": preferDefault(require("/Users/Liam/coding/Gatsby/gatsby-portolio-2023/src/templates/Generic.js")),
  "component---src-templates-markdown-js": preferDefault(require("/Users/Liam/coding/Gatsby/gatsby-portolio-2023/src/templates/Markdown.js"))
}

