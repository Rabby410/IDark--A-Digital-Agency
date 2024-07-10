import React from 'react'
import Breadcrumbs from '../components/layouts/breadcrumbs'
import Blogs from '../components/blog/blogs'

const Bloglist = () => {
  return (
    <>
    <Breadcrumbs pageTitle="Blog List" parentPage="Home" parentPageUrl="/" />
    <Blogs/>
    </>
  )
}

export default Bloglist