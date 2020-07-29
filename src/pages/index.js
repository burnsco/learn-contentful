/** @jsx jsx */
import { graphql, Link, useStaticQuery } from 'gatsby'
import { jsx, Message, Heading } from 'theme-ui'
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
      <h1>Lessons</h1>
      {data.nodes.map(lesson => (
        <Message key={`lesson-${lesson.slug}`} sx={{ maxWidth: 600 }}>
          <Heading as="h4">
            <Link
              sx={{ textDecoration: 'none', color: 'carolinablue' }}
              to={`/${lesson.slug}`}
            >
              {lesson.title}
            </Link>
          </Heading>
        </Message>
      ))}
    </Layout>
  )
}
