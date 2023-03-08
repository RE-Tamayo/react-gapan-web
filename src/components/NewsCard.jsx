import CardImage from '../assets/3.jpg'

const NewsCard = () => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={CardImage} className="card-img-top" alt="" />
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime natus quibusdam harum fugiat inventore, explicabo illum unde amet ipsa...
                        <a href="#!">See more</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard