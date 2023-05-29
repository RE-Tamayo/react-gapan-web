import GSIS from '../assets/gsis.jpg'

const LinksCard = () => {
  return (
    <div className="card py-2">
        <div className="card-body d-flex">
            <img src={GSIS} width={75} height={75} alt="" />
            <div className="d-flex justify-content-center align-items-center px-3 text-center w-100 h-100">
              <h5>GSIS</h5>
            </div>
        </div>
    </div>
  )
}

export default LinksCard