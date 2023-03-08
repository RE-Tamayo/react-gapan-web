import Image1 from '../assets/1.jpg'

const ServiceCard = () => {
  return (
    <div className="col-md-3">
        <div className="custom-container" style={{backgroundImage: `url(${Image1})`}}>
            <div className="overlay">
                <p className="text">Sample title</p>
                <button className="btn btn-outline-light button">Show more</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard