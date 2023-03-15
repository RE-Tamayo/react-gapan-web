import Breadcrumbs from "../components/Breadcrumbs"
import Banner from "../components/Banner"

const Barangay = () => {
  return (
    <>
        <main>
            <div className="container-fluid">
                <Breadcrumbs />
            </div>

            <Banner title={'BARANGAY'} />
        </main>
    </>
  )
}

export default Barangay