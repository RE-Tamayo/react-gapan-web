const ServicesModal = ({id, title, office, instruction, steps}) => {

    return ( 
        <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-6 fw-bold" id="modalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="modal-office">{office}</p>
                        <p className="modal-instruction">{instruction}</p>
                        <ul className="modal-steps">
                            {steps?.map((step, index) => (<li key={index}>{step.step}</li>))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default ServicesModal;