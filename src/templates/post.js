import React from 'react';//; 44K (gzipped: 13.6K)
//import Helmet from 'react-helmet';//; 30.5K (gzipped: 9.6K)
//import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
 
export default function Template({data}) {
	const {markdownRemark: post} = data;
	//const post = data.markdownRemark;
	return (
		<Layout>
			<div>
				<h1>{post.frontmatter.title}</h1>
				<h2>{post.frontmatter.path}</h2>
				<div dangerouslySetInnerHTML={{__html: post.html}} />
			</div>
		</Layout>
	)
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: {eq: $path} }) {
			html
			frontmatter {
				path
				title	
			}	
		}
	}
`