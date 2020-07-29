import { graphql } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    contentfulLesson(slug: { eq: $slug }) {
      title
      video
      description {
        json
      }
      author {
        github
        name
      }
      seo {
        title
        description {
          description
        }
      }
    }
  }
`

export default function LessonTemplate({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO
        title={data.contentfulLesson.seo.title}
        description={data.contentfulLesson.seo.description.description}
      />

      <p>Test</p>
    </Layout>
  )
}
