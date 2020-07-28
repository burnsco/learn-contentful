/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { jsx, Card, Heading } from 'theme-ui'
import Layout from '../components/layout'

export default function IndexPage() {
  const { data } = useStaticQuery(graphql`
    query GetLesson {
      data: allContentfulLesson {
        nodes {
          title
          slug
          author {
            name
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      {data.nodes.map(lesson => (
        <Card key={lesson.slug} sx={{ maxWidth: 600 }}>
          <Heading>{lesson.title}</Heading>
        </Card>
      ))}
    </Layout>
  )
}
