import Banner from "../components/Banner"
import Breadcrumbs from "../components/Breadcrumbs"
import Masthead from "../components/Masthead"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <>
      <header>
        <Masthead />

        <hr />

      </header>

      <main>
        <div className="container-fluid">
          <Breadcrumbs />
        </div>

        <div className="container mb-3">
          <Banner title={'LIST OF FRONTLINE SERVICES'}/>
        </div>

        <div className="container">
          <div className="row g-3">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </main>
    </>
  )
}

export default Services