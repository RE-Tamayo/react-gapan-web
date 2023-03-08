import Image1 from '../assets/1.jpg'
import Image2 from '../assets/2.jpg'
import Image3 from '../assets/3.jpg'

const Carousel = () => {
    return (
        <div className="row">
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel