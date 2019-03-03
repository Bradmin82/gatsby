import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({data}) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link 
	    to="/page-2/">
	    Go to page 2
    </Link>
	<h2>Index</h2>
	<ul>
	    {data.allMarkdownRemark.edges.map(post => (
		    <li key={post.node.id}><Link 
		    	key={post.node.id}
		    	to={post.node.frontmatter.path}>
		    	{post.node.frontmatter.title}
		    </Link>
		    {post.node.frontmatter.date}
		    </li>
		 ))}
	</ul>
  </Layout>
)

export const pageQuery = graphql`
	query IndexQuery {
	  allMarkdownRemark(
	  limit: 10
	  sort: { fields: [frontmatter___date], order: DESC }
	  filter: { frontmatter: { published: { eq: true } } }
	  ) {
	    edges {
	      node {
		    id
	        frontmatter {
	          path
	          title
	          date
	        }
	      }
	    }
	  }
	}
`

export default IndexPage