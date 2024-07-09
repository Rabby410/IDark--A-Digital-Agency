import React from 'react'
import Breadcrumbs from '../components/layouts/breadcrumbs'
import ServicesPage from '../components/services/servicesPage'

const Services = () => {
  return (
   <>
   <Breadcrumbs pageTitle="Services" parentPage="Home" parentPageUrl="/" />
   <ServicesPage />
   </>
  )
}

export default Services