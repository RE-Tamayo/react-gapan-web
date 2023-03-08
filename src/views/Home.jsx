import React from 'react'
import Banner from '../components/Banner'
import Breadcrumbs from '../components/Breadcrumbs'
import Carousel from '../components/Carousel'
import Masthead from '../components/Masthead'

const Home = () => {

  return (
    <>
      <header>
        <Masthead />

        <hr />
        
        <div className="container-fluid">
            <Breadcrumbs />
            <Carousel />
        </div>

      </header>

      <hr />

      <main>
        <Banner title={'NEWS AND UPDATES'}/>
      </main>
    </>
  )
}

export default Home