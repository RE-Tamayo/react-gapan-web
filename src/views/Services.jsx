import axios from "axios"
import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Breadcrumbs from "../components/Breadcrumbs"
import ServiceCard from "../components/ServiceCard"
import ServicesModal from "../components/ServicesModal"

const Services = () => {
  const [services, setServices] = useState([]);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    axios.get('services.json').then(res => {
      setServices(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const clickEvent = (id) => {
    axios.get('services.json').then(res => {
      setModalData(res.data[id.id]);
    }).catch(err => {
      console.log(err);
    });
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
            {services.map(service => (<ServiceCard key={service.id} clickEvent={clickEvent} id={service.id} title={service.title} image={service.image}/>))}
            <ServicesModal id={modalData.id} title={modalData.title} office={modalData.office} instruction={modalData.instruction} steps={modalData.steps}/>
          </div>
        </div>
      </main>

    </>
  )
}

export default Services