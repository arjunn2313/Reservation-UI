import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './home.css'
import Featured from '../../components/featured/featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/footer/Footer'
 
export default function Home() {
  return (
     <>
     <Navbar/>
     <Header/>
     <div className='homeContainer'>
      <Featured/>
       <h1 className='homeTitle'>Browse your property by type</h1>
       <PropertyList/>
       <h1 className='homeTitle'>Homes guest love</h1>
       <FeaturedProperties/>
       <Mail/>
        <Footer />
     </div>
     </>
  )
}
