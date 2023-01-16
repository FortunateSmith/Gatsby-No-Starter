module.exports = {
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/data`
    }
  },
  'gatsby-transformer-remark'
]
}

// __dirname => what is the directory for the file I'm currently running?
// On build time, gatsby will start looking into this directory