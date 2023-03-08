import React from 'react'
import Banner from '../components/Banner'
import Breadcrumbs from '../components/Breadcrumbs'
import Carousel from '../components/Carousel'
import LinksCard from '../components/LinksCard'
import Masthead from '../components/Masthead'
import NewsCard from '../components/NewsCard'

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
        <Banner title={'NEWS AND UPDATES'} />
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-9">
              <div className="row g-3">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
              </div>
            </div>
            <div className="col-md-3">
              <div className="row g-3">
                <LinksCard />
                <LinksCard />
                <LinksCard />
                <LinksCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home