import { useState } from "react"
import Banner from "../components/Banner"
import Breadcrumbs from "../components/Breadcrumbs"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  const [serviceData, setServiceData] = useState({
    title: ''
  });

  const onClick = () => {
    
  }


  return (
    <>
      <main>
        <div className="container-fluid">
          <Breadcrumbs />
        </div>

        <div className="container mb-3">
          <Banner title={'LIST OF FRONTLINE SERVICES'}/>
        </div>

        <div className="container">
          <div className="row g-3">
            <ServiceCard onClick={onClick}/>
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