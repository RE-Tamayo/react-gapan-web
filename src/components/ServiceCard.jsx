import Image1 from '../assets/1.jpg'

const ServiceCard = ({onClick}) => {
  return (
    <div className="col-md-3">
        <div className="custom-container" style={{backgroundImage: `url(${Image1})`}}>
            <div className="overlay">
                <p className="text">Sample title</p>
                <button className="btn btn-outline-light button" onClick={onClick}>Show more</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard