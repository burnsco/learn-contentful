const path = require(`path`)

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const lessonPostTemplate = path.resolve(`src/templates/lesson-template.js`)

  const result = await graphql(`
    {
      allContentfulLesson {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allContentfulLesson.nodes.forEach(lesson => {
    actions.createPage({
      path: `/${lesson.slug}/`,
      component: lessonPostTemplate,
      context: {
        slug: lesson.slug,
      },
    })
  })
}
