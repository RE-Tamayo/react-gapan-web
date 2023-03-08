const Banner = ({title}) => {
    return (
        <div className="container">
            <div className="row bg-dark text-light py-2">
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <h1 className="my-auto ff-times-new-roman">{title}</h1>
                </div>
            </div>

            <div className="divider row"></div>

        </div>
    )
}

export default Banner