import React from 'react'
import Breadcrumbs from '../components/layouts/breadcrumbs'
import ContactPagedetails from '../components/contact/pagedetails'
import NewsLetter from '../components/common/newsLetter'

const Contact = () => {
  return (
    <>
    <Breadcrumbs pageTitle="Contact" parentPage="Home" parentPageUrl="/" bgImage="/images/contact-us/bg-image-17.jpg" />
    <ContactPagedetails/>
    {/* <NewsLetter/> */}
    </>
  )
}

export default Contact