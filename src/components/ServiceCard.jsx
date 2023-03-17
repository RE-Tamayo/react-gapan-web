import Image1 from '../assets/1.jpg'
import axios from 'axios'

const ServiceCard = ({clickEvent, id, title, image}) => {

  return (
    <div className="col-md-3">
        <div className="custom-container" style={{backgroundImage: `url('src/assets/${image}')`}}>
            <div className="overlay">
                <p className="text">{title}</p>
                <button className="btn btn-outline-light button" data-bs-toggle="modal" data-bs-target="#modal" id={id} onClick={() => {clickEvent({id})}}>Show more</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard