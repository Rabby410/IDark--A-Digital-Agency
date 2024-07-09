import React from 'react'
import Breadcrumbs from '../components/layouts/breadcrumbs'
import Aboutpage from '../components/about/aboutpage'

const About = () => {
  return (
    <>
    <Breadcrumbs pageTitle="About" parentPage="Home" parentPageUrl="/"  />
    <Aboutpage />
    </>
  )
}

export default About